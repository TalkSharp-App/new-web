import { initializeApp } from "firebase/app";
// import {
//   initializeAppCheck,
//   ReCaptchaEnterpriseProvider,
// } from "firebase/app-check";
import { getFunctions } from "firebase/functions";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Enable App Check debug mode ONLY during local development
// if (import.meta.env.DEV) {
//   (self as any).FIREBASE_APPCHECK_DEBUG_TOKEN = true;
// }

// App Check
// initializeAppCheck(app, {
//   provider: new ReCaptchaEnterpriseProvider(
//     import.meta.env.VITE_RECAPTCHA_ENTERPRISE_SITE_KEY
//   ),
//   isTokenAutoRefreshEnabled: true,
// });

const functions = getFunctions(app, "us-central1");

export {functions, db}