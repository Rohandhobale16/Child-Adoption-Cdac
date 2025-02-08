import axios from "axios";
import { createUrl } from "../util";
import { toast } from "react-toastify";

export async function fetchParent(user) {
  const url = createUrl(`parent/${user.id}`);
  const response = await axios.get(url);
  const data = response.data;
  if (data.message == "success") {
    return data;
  } else {
    if (response.status === 400 || response.status === 401) {
      toast.warning(data.message || "Invalid credentials. Please try again."); // Display message from server if available
    } else if (response.status === 500) {
      toast.error("Internal Server Error. Please contact admin");
    } else {
      toast.warning("Login failed. Please check your credentials."); // Generic message
    }
    return null;
  }
}
