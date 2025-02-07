// loginservice.js
import axios from "axios";
import { createUrl } from "../util";
import { toast } from "react-toastify";

export async function loginservice(email, password) {
  const url = createUrl("Login");
  const body = { email, password };
  try {
    const response = await axios.post(url, body);
    const data = response.data;
    console.log(data); // Keep this for debugging

    if (response.status === 200) {
      // Check response.status, not data.status
      return data;
    } else {
      // Handle non-200 status codes (errors)
      if (response.status === 400 || response.status === 401) {
        // Check for common auth errors
        toast.warning(data.message || "Invalid credentials. Please try again."); // Display message from server if available
      } else if (response.status === 500) {
        toast.error("Internal Server Error. Please contact admin");
      } else {
        toast.warning("Login failed. Please check your credentials."); // Generic message
      }
      return null; // Important: Return null to indicate failure
    }
  } catch (error) {
    console.error("Login service error:", error);
    if (axios.isAxiosError(error)) {
      // Check if it's an Axios error
      const errorMessage =
        error.response?.data?.message || "An error occurred during login.";
      toast.error(errorMessage); // Display error message from the server
    } else {
      toast.error("A network error occurred. Please try again later."); // For network issues
    }
    return null; // Important: Return null to indicate failure
  }
}
