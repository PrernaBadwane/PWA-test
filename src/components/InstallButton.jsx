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
        className="fixed bottom-5 left-5 md:w-[85%] w-[70%] bg-gradient-to-br from-[#6a11cb] to-[#2575fc] text-white py-[10px] px-[20px] text-[14px] border-none rounded-full shadow-md cursor-pointer transition-all duration-300 ease-in-out transform hover:bg-blue-500 z-50"
        
      >
        Install App
      </button>
    )
  );
};

export default InstallButton;
