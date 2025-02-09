import axios from "axios";
import { createUrl } from "../util";

export async function addChild(data) {
  const url = createUrl("childhome/addchild");
  try {
    const response = await axios.post(url, data, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("Error adding child:", error);
    return error.response; // Return the error response for better error handling
  }
}

export async function getChildList() {
  const url = createUrl("childhome/allChildhomedetails");
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log(response);
    console.log(response.status);
    console.log(data);
    if (response.status == 200) {
      return data;
    }
  } catch (error) {
    console.error("Error adding child:", error);
    return error.response; // Return the error response for better error handling
  }
}
