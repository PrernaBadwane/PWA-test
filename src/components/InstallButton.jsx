import React, { useEffect, useState } from "react";

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Listen for the 'beforeinstallprompt' event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // Prevent the default mini-infobar from appearing
      setDeferredPrompt(e); // Save the event
      setIsVisible(true); // Show the install button
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  useEffect(() => {
    // Listen for the 'appinstalled' event
    const handleAppInstalled = () => {
      console.log("PWA installed");
      setIsVisible(false); // Hide the install button
    };

    window.addEventListener("appinstalled", handleAppInstalled);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show the install prompt
      const { outcome } = await deferredPrompt.userChoice; // Wait for the user to respond
      console.log(`User response to the install prompt: ${outcome}`);
      setDeferredPrompt(null); // Clear the deferred prompt variable
      setIsVisible(false); // Hide the install button
    }
  };

  // Render the button conditionally
  return (
    isVisible && (
      <button
        id="install-button"
        onClick={handleInstallClick}
        style={{
          width : "100%",
          bottom: "100vw",
          right: "60px",
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          color: "white",
          padding: "10px 20px",
          fontSize: "14px",
          border: "none",
          borderRadius: "100px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
          transition: "background-color 0.3s ease, transform 0.3s ease",
        }}
      >
        Install App
      </button>
    )
  );
};

export default InstallButton;
