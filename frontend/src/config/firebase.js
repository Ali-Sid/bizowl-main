// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore';

import { partnerFirebaseConfig, primaryFirebaseConfig } from "./firebaseconfig";
import { adminFirebaseConfig } from "./firebaseconfig";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize primary Firebase
const primaryApp = initializeApp(primaryFirebaseConfig, "primary");
// const analytics = getAnalytics(app);
const primaryAuth = getAuth(primaryApp);
const primaryDB = getFirestore(primaryApp);


// Initialize secondary Firebase
const adminApp = initializeApp(adminFirebaseConfig, "admin");
// const analytics = getAnalytics(app);
const adminAuth = getAuth(adminApp);
const adminDB = getFirestore(adminApp);


// Initialize tertiary Firebase
const partnerApp = initializeApp(partnerFirebaseConfig, "partner");
// const analytics = getAnalytics(app);
const partnerAuth = getAuth(partnerApp);
const partnerDB = getFirestore(partnerApp);



export { primaryAuth, adminAuth, partnerAuth, primaryDB, adminDB, partnerDB }