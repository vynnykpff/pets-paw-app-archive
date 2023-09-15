import { DEFAULT_ERROR_MESSAGE } from "@/common/utils/checkError";
import { AxiosError } from "axios";

const isAxiosError = <D>(error: unknown): error is AxiosError<D, D> => {
  return error instanceof AxiosError;
};

export const getErrorObject = (e: unknown) => {
  if (!isAxiosError<{ message: string[] | string }>(e)) {
    return {
      message: DEFAULT_ERROR_MESSAGE,
    };
  }
  if (!e.response?.data.message) {
    return {
      message: DEFAULT_ERROR_MESSAGE,
    };
  }
  if (Array.isArray(e.response.data.message)) {
    return {
      ...e.response.data,
      message: e.response.data.message[0],
    };
  } else {
    return {
      ...e.response.data,
      message: e.response.data.message,
    };
  }
};
