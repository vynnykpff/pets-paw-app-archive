import { Routes } from "@/common/constants/routes";
import ModalNotification from "@/components/ui/ModalNotification/ModalNotification";
import { useRouter } from "next/router";
import { FC } from "react";

type NotificationChoose = "success" | "warning" | "error";

interface UserStatusProps {
  title: string;
  typeNotification: NotificationChoose;
}

const UserStatus: FC<UserStatusProps> = ({ title, typeNotification }) => {
  const router = useRouter();

  setTimeout(() => {
    void router.push(Routes.HOME);
  }, 1000);

  return <ModalNotification title={title} typeNotification={typeNotification} />;
};

export default UserStatus;
