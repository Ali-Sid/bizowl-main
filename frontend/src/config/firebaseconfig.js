// firebaseConfig.js

export const primaryFirebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export const adminFirebaseConfig = {
    apiKey: "AIzaSyBcLEpatg7BZyrnXVL_GqdR5oKJ_-VQZlE",
    authDomain: "bizowl-admin-89cf5.firebaseapp.com",
    projectId: "bizowl-admin-89cf5",
    storageBucket: "bizowl-admin-89cf5.appspot.com",
    messagingSenderId: "649810580937",
    appId: "1:649810580937:web:137ae35052f32f99c34418",
};
