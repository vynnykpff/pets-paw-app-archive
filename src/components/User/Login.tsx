import { Routes } from "@/common/constants/routes";
import { UserCredentials } from "@/common/types/User";
import { setEmailProviderAuth } from "@/common/utils/setEmailProviderAuth";
import { setGoogleAuth } from "@/common/utils/setGoogleAuth";
import Form from "@/components/Form/Form";
import ModalNotification from "@/components/ui/ModalNotification/ModalNotification";
import { useState } from "react";

export const Login = () => {
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleLogin = async (userData: UserCredentials): Promise<void> => {
    const response = await setEmailProviderAuth(userData);
    setShowErrorModal(response);
  };

  const handleGoogleAuth = async (): Promise<void> => {
    const response = await setGoogleAuth();
    setShowErrorModal(!response);
  };

  return (
    <>
      <Form
        title="Sign In"
        description="Don't have an account?"
        authText="Registration"
        route={Routes.REGISTRATION}
        handleGoogleAuth={handleGoogleAuth}
        handleClick={handleLogin}
      />
      {showErrorModal && <ModalNotification title="Error authorization" typeNotification="error" />}
    </>
  );
};
