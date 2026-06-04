import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD45KB6gW-dA_zSoZoORIE_4BgP8NFTHeQ",
  authDomain: "academia-ai-6c865.firebaseapp.com",
  projectId: "academia-ai-6c865",
  storageBucket: "academia-ai-6c865.firebasestorage.app",
  messagingSenderId: "63847418999",
  appId: "1:63847418999:web:17877ef4921e439b0f0a72",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();