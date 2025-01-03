import React, { useEffect } from "react";
import { requestForToken, onMessageListener } from "./firebase";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Icons from "./components/Icons";
import InstallButton from "./components/InstallButton";
import "./index.css";
import { ICONS, IMAGES } from "./assets";

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
  const slides = [
    { id: 1, src: IMAGES.image1, alt: "Product 1" },
    { id: 2, src: IMAGES.image2, alt: "Product 2" },
    { id: 3, src: IMAGES.image3, alt: "Product 3" },
  ];

  const shareTitle = "Check out Shree Balaji Mobile & Electronic Shop!";
  const shareText = "Visit Shree Balaji Mobile & Electronic Shop for the best deals on electronics!";
  const shareURL = window.location.href;

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareURL,
        });
        console.log("Content shared successfully!");
      } catch (error) {
        console.error("Error sharing content:", error);
      }
    } else {
      alert("Sharing is not supported on this device.");
    }
  };
  const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out Shree Balaji Mobile & Electronic Shop!",
          text: "Visit Shree Balaji Mobile & Electronic Shop for the best deals on electronics!",
          url: window.location.href, // Current page URL
        });
        console.log("Content shared successfully!");
      } catch (error) {
        console.error("Error sharing content:", error);
      }
    } else {
      alert("Sharing is not supported on this device.");
    }
  };
  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(`${shareText} \n ${shareURL}`);
    window.open(`https://api.whatsapp.com/send?text=${message}`, "_blank");
  };

  const handleFacebookShare = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareURL}`, "_blank");
  };

  const handleTwitterShare = () => {
    const tweet = encodeURIComponent(`${shareText} ${shareURL}`);
    window.open(`https://twitter.com/intent/tweet?text=${tweet}`, "_blank");
  };

  return (
    <div className="w-full  flex flex-col justify-center items-center">
      <Header
        title="Shree Balaji Mobile & Electronic Shop"
        subtitle="Category Name"
        address="Mhada Colony, H.no -007 Lig, Cidco, Chhatrapati Sambhajinagar"
      />
      <Slider
        slides={slides}
        autoplayDelay={1600}
        speed={3000}
        loop={true}
        slideClass="w-full  h-[180px] md:h-[300px] lg:h-[400px] object-cover"
      />
      <Icons />
      <div className="flex justify-center w-[95%] h-[100vh] mt-10 mb-20 border-2 border-black">
        <iframe
          src="https://www.flipkart.com"
          title="Flipkart"
          className="w-full h-full  "
        ></iframe>
      </div>
      <div
        onClick={handleShareClick}
        className="fixed bottom-5 right-5 w-10 h-10 bg-white border-2 border-blue-500 rounded-full shadow-lg flex items-center justify-center cursor-pointer z-50"
      >
        
        <img src={ICONS.share} alt="Share" className="md:size-7 size-5 mr-1" />
      </div>
      {/* <div className="flex mt-5 space-x-4">
        <button onClick={handleWhatsAppShare} className="btn-whatsapp">
          Share on WhatsApp
        </button>
        <button onClick={handleFacebookShare} className="btn-facebook">
          Share on Facebook
        </button>
        <button onClick={handleTwitterShare} className="btn-twitter">
          Share on Twitter
        </button>
      </div> */}
      <InstallButton />
    </div>
  );
};

export default App;
