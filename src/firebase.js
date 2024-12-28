import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyBHt13nKmnyvv1OCWNQAxCohN7nQ2D35FU",
    authDomain: "pwaapp-877a4.firebaseapp.com",
    projectId: "pwaapp-877a4",
    storageBucket: "pwaapp-877a4.firebasestorage.app",
    messagingSenderId: "518759848773",
    appId: "1:518759848773:web:e04f412f76dbf870a13c2c",
    measurementId: "G-QKG68PT9ZJ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Request permission and get token
export const requestForToken = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: "BMq-9LYOe9BhL5lk8gRsUDn31trLOAsYBeCukmi40Bg3Z8YpM6PsKj9KhMOhQI9ONU2uJQLTcdhQUseV0YfJWDA", // Add your Web Push Certificate Key Pair
    });
    if (token) {
      console.log("FCM Token:", token);
    } else {
      console.log("No registration token available.");
    }
  } catch (error) {
    console.error("Error retrieving token:", error);
  }
};

// Handle incoming messages
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
