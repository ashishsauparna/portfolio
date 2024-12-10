"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BouncingImage() {
  
  const [displayedText, setDisplayedText] = useState("Ashish Sharma"); // Initial text
  const [typedText, setTypedText] = useState(""); // Holds the typing text for "Scroll to view work"
  const [cssClass, setCssClass] = useState("arrow-text-default"); // Default CSS class

  useEffect(() => {
    // Step 1: Replace "Ashish Sharma" with "Typing.."
    const replaceTimeout = setTimeout(() => {
      setDisplayedText("Typing..");
      setCssClass("arrow-text-highlight"); // Change CSS class for "Typing.."
  
      // Step 2: Start typing the first message
      const typingTimeout = setTimeout(() => {
        setDisplayedText(""); // Clear direct text for the typing effect
        setCssClass("arrow-text-final"); // Change CSS class for "Hi! Welcome to my portfolio"
        startTypingEffect(" 👋 Hi! Welcome to my portfolio");
  
        // Step 3: Replace the first typing effect with the second message after a delay
        const secondTypingTimeout = setTimeout(() => {
          setTypedText(""); // Clear the current typing text
          startTypingEffect(" Scroll down to see my work");
        }, 6000); // Wait for the first typing to complete (assuming ~4 seconds duration)
  
        return () => clearTimeout(secondTypingTimeout);
      }, 1000); // Delay before starting the first typing effect
  
      return () => clearTimeout(typingTimeout);
    }, 3000); // 3 seconds to show "Typing.."
  
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
    }, 70); // Typing speed (in milliseconds)
  };


  return (
    <motion.div
    initial={{ y: 500, x: 200 }} // Start from below the viewport
    animate={{ y: [500, 0, 0], x: [200, 0, 0] }} // Move up first, then bounce
    transition={{
        duration: 4,
        ease:'easeInOut',
        // times: [0, 0.4, 0.6, 0.9], // Timing for each keyframe
    }}
    style={{
      position: "relative",
      width: "100%",
      height: "1rem",
      zIndex: 100,
    }}
    >
      <div className="absolute left-[45%] top-10">

        <div
        // initial={{rotate:0, y:0, x:0}}
        // animate={{rotate:-90, y:50, x:-10}}
        // transition={{
        //   delay:2.5,
        //   ease:'easeInOut',
        //   duration:1
        // }}
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
        </div>
        <div 
        style={{
          transform:"translateX(18px) translateY(-6px)",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
        }}
        className={`transition-all duration-500 ${cssClass}`}>
          {displayedText || typedText}
        </div>

      </div>
    </motion.div>
  );
}