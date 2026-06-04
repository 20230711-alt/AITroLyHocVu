import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";

export const loginWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);

  return {
    uid: result.user.uid,
    name: result.user.displayName,
    email: result.user.email,
    avatar: result.user.photoURL,
  };
};