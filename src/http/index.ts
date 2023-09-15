import { checkError } from "@/common/utils/checkError";
import { getErrorObject } from "@/common/utils/getErrorObject";
import axios from "axios";

axios.interceptors.response.use(
  config => config,
  async err => {
    throw checkError(getErrorObject(err).message);
  },
);
