import { auth } from "@/common/firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const setGoogleAuth = async (): Promise<boolean> => {
  const provider: GoogleAuthProvider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    return false;
  } catch (e) {
    return true;
  }
};
