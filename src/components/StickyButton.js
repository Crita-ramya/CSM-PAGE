// StickyButton.js
import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";

const StickyButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      bgColor="#BB3E03"
      color="#fff"
      fontSize="20px"
      fontWeight="600"
      fontFamily="FedraSansStd"
      py={"40px"}
      px={"30px"}
      position="fixed"
      top='50%'
      bottom="20px" // Adjust this as needed
      right="20px" // Adjust this as needed
      display={isVisible ? { md: "flex", base: "none" } : "none"}
      onClick={scrollToTop}
      zIndex={123}
    >
      Partner with
      <br /> us
    </Button>
  );
};

export default StickyButton;
