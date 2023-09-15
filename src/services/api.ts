import axios from "axios";

export const catApi = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key": process.env.NEXT_PUBLIC_CAT_API,
    "Content-Type": "application/json",
  },
});
