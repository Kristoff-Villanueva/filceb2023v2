// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// interface FirebaseConfig {
// 	apiKey: string;
// 	authDomain: string;
// 	projectId: string;
// 	storageBucket: string;
// 	messagingSenderId: string;
// 	appId: string;
// 	measurementId: string;
// }

const firebaseConfig = {
	apiKey: "AIzaSyBi6tU5kRTiEUTQm9RPnk9G3M3Q4tht5MY",
	authDomain: "filceb-1c9db.firebaseapp.com",
	projectId: "filceb-1c9db",
	storageBucket: "filceb-1c9db.appspot.com",
	messagingSenderId: "702831737681",
	appId: "1:702831737681:web:734ebc616833edcc6a7170",
	measurementId: "G-N87K9KNK9H",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
