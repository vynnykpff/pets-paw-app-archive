import { Routes } from "@/common/constants/routes";
import { UserCredentials } from "@/common/types/User";
import { setEmailProviderAuth } from "@/common/utils/setEmailProviderAuth";
import { setGoogleAuth } from "@/common/utils/setGoogleAuth";
import Form from "@/components/Form/Form";
import ModalNotification from "@/components/ui/ModalNotification/ModalNotification";
import { useState } from "react";

export const Registration = () => {
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleRegister = async (userData: UserCredentials): Promise<void> => {
    const response = await setEmailProviderAuth(userData);
    setShowErrorModal(response);
  };

  const handleGoogleAuth = async (): Promise<void> => {
    const response = await setGoogleAuth();
    setShowErrorModal(response);
  };

  return (
    <>
      <Form
        title="Registration"
        description="You already have an account?"
        authText="Sign In"
        route={Routes.LOGIN}
        handleGoogleAuth={handleGoogleAuth}
        handleClick={handleRegister}
      />
      {showErrorModal && <ModalNotification title="Error signing!" typeNotification="error" />}
    </>
  );
};
