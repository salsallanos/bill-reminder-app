import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBIbhrh-ipaAbJEWwG3zef05XyK0qBrU0M",
  authDomain: "bill-reminder-app-d8135.firebaseapp.com",
  projectId: "bill-reminder-app-d8135",
  storageBucket: "bill-reminder-app-d8135.appspot.com",
  messagingSenderId: "249602410859",
  appId: "1:249602410859:web:c30cf5e1fd76c8523ca42e",
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

