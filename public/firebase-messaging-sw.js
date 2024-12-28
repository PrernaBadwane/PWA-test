importScripts("https://www.gstatic.com/firebasejs/9.24.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.24.0/firebase-messaging.js");

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
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Background message handler
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
