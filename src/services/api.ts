import axios from "axios";

export const catApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CAT_BASE_URL,
  headers: {
    "x-api-key": process.env.NEXT_PUBLIC_CAT_API,
    "Content-Type": "application/json",
  },
});
