import React, { useEffect } from "react";
import { requestForToken, onMessageListener } from "./firebase";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Icons from "./components/Icons";
import InstallButton from "./components/InstallButton";
import "./index.css";



const App = () => {
  useEffect(() => {
    // Request notification permission
    requestForToken();

    // Listen for foreground messages
    onMessageListener().then((payload) => {
      console.log("Foreground notification received: ", payload);
      alert(`${payload.notification.title}: ${payload.notification.body}`);
    });
  }, []);

  return (
    <div className="container">
    <Header />
    <Slider />
    <Icons />
    <div className="iframe-container">
      <iframe
        src="https://www.flipkart.com"
        title="Flipkart"
        frameBorder="0"
      ></iframe>
    </div>
    <div className="floating-button">
      <img src="/images/share.png" alt="Share" />
    </div>
    <InstallButton />
  </div>
  );
};

export default App;