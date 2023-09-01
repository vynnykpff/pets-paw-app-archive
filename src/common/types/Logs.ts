import { LogType } from "@/common/constants/logType";

export interface Log {
  type: LogType;
  time: string;
  imageId: string;
}
