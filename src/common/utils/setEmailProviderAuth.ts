import { auth } from "@/common/firebase-config";
import { UserCredentials } from "@/common/types/User";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const setEmailProviderAuth = async (userData: UserCredentials): Promise<boolean> => {
  try {
    await createUserWithEmailAndPassword(auth, userData.email, userData.password);
    return false;
  } catch (e) {
    return true;
  }
};
