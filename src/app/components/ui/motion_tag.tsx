"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BouncingImage() {
  
  const [displayedText, setDisplayedText] = useState("Ashish Sharma"); // Initial text
  const [typedText, setTypedText] = useState(""); // Holds the typing text for "Scroll to view work"
  const [cssClass, setCssClass] = useState("arrow-text-default"); // Default CSS class

  useEffect(() => {
    // Step 1: Replace "Ashish Sharma" with "Say Something"
    const replaceTimeout = setTimeout(() => {
      setDisplayedText("Say Something");
      setCssClass("arrow-text-highlight"); // Change CSS class for "Say Something"

      // Step 2: Replace "Say Something" with "Scroll to view work"
      const typingTimeout = setTimeout(() => {
        setDisplayedText(""); // Clear direct text for the typing effect
        setCssClass("arrow-text-final"); // Change CSS class for "Scroll to view work"
        startTypingEffect(" 👋 Hi! Scroll down to see my work");
      }, 1000); // 2-second delay before typing starts

      return () => clearTimeout(typingTimeout);
    }, 5000); // 3 seconds to show "Say Something"

    return () => clearTimeout(replaceTimeout);
  }, []);

  // Typing effect function
  const startTypingEffect = (text: string) => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < text.length-1) {
        setTypedText((prev) => prev + text[charIndex]);
        charIndex++;
      } else {
        clearInterval(typingInterval); // Stop typing when done
      }
    }, 100); // Typing speed (in milliseconds)
  };


  return (
    <motion.div
    initial={{ y: 500, x: 200 }} // Start from below the viewport
    animate={{ y: [500, 0, 0, -290], x: [200, 0, 0, -150] }} // Move up first, then bounce
    transition={{
        duration: 4,
        ease:'easeInOut',
        times: [0, 0.4, 0.6, 0.9], // Timing for each keyframe
    }}
    style={{
      position: "relative",
      width: "100%",
      height: "1rem",
      zIndex: 100,
    }}
    >
      <div className="absolute left-[70%] -top-16">

        <motion.div
        initial={{rotate:0, y:0, x:0}}
        animate={{rotate:-90, y:50, x:-10}}
        transition={{
          delay:2.5,
          ease:'easeInOut',
          duration:1
        }}
        style={{
          transformOrigin: "center",
          width: "30px", // Set image container width
          height: "30px",
        }}
        >
        <Image
            src="/arrow_ashish.png"
            alt="Name tag with arrow"
            width={30}
            height={30}
            quality={100}
        />
        </motion.div>
        <div 
        style={{
          transform:"translateX(20px)",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
        }}
        className={`transition-all duration-500 ${cssClass}`}>
          {displayedText || typedText}
        </div>

      </div>
    </motion.div>
  );
}