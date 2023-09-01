import DislikeIcon from "@/assets/icons/dislike.svg";
import FavouriteIcon from "@/assets/icons/favourite.svg";
import LikeIcon from "@/assets/icons/like.svg";
import { LogType } from "@/common/constants/logType";
import { useAppSelector } from "@/hooks/useAppSelector";
import { ILog } from "@/store/slices/votingSlice/slice";
import { FC, ReactNode } from "react";
import styles from "./VotingLogs.module.scss";
import { v4 as uuidv4 } from "uuid";

const LogIcons: Record<LogType, ReactNode> = {
  [LogType.ADD_TO_FAVOURITE]: <FavouriteIcon viewBox="0 0 30 30" />,
  [LogType.DISLIKE]: <DislikeIcon viewBox="0 0 30 30" />,
  [LogType.LIKE]: <LikeIcon viewBox="0 0 30 30" />,
  [LogType.REMOVE_FROM_FAVOURITE]: <></>,
};

const LogPrompts: Record<LogType, string> = {
  [LogType.ADD_TO_FAVOURITE]: "was added to Favourites",
  [LogType.DISLIKE]: "was added to Dislikes",
  [LogType.LIKE]: "was added to likes",
  [LogType.REMOVE_FROM_FAVOURITE]: "was removed from Favourites",
};

interface Props {
  logs?: ILog[];
}

const VotingLogs: FC<Props> = ({ logs: logsFromProps }) => {
  const { logs: logsFromStore } = useAppSelector(state => state.votingSliceReducer);
  const logs = logsFromProps ?? logsFromStore;

  return (
    <div className={styles.votingLogsContainer}>
      {logs.map(item => (
        <div key={uuidv4()} className={styles.votingLogsContent}>
          <div className={styles.dataContainer}>
            <div className={styles.logTime}>{item.time}</div>
            <div className={styles.logTitle}>
              Image ID: <span className={styles.logCode}>{item.imageId}</span> {LogPrompts[item.type]}
            </div>
          </div>
          <div className={styles.logIcon}>{LogIcons[item.type]}</div>
        </div>
      ))}
    </div>
  );
};

export default VotingLogs;
