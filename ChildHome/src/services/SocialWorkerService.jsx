import axios from "axios";
import { toast } from "react-toastify";
import { createUrl } from "../util";

export async function registerSocialworker(socialWorkeDdata, user) {
  console.log(socialWorkeDdata);
  const url = createUrl("childhome/addemployee");
  console.log(socialWorkeDdata);
  try {
    const response = await axios.post(url, socialWorkeDdata, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.jwt}`,
      },
    });
    console.log(response.data);

    if (response.status === 200 || response.status === 201) {
      //  toast.success("Social Worker Registered Successfully");
      return response.data;
    } else {
      toast.warning("Please try again.");
      return null;
    }
  } catch (error) {
    console.error("Registration service error:", error);

    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred during Registration.";
      toast.error(errorMessage);
    } else {
      toast.error("A network error occurred. Please try again later.");
    }

    return null;
  }
}
