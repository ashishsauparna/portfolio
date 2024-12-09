"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BouncingImage() {
  
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout; // Type for the timeout variable

    // Function to execute when no scroll is detected for 5 seconds
    const onIdle = () => {
      console.log('User has not scrolled for 5 seconds');
      setIsIdle(true);
    };

    // Event listener for scroll event
    const handleScroll = () => {
      // Clear the previous timeout
      clearTimeout(scrollTimeout);

      // Set a new timeout for 5 seconds
      scrollTimeout = setTimeout(onIdle, 5000);
    };

    // Add the event listener
    window.addEventListener('scroll', handleScroll);

    // Initial timeout setup in case the user doesn't scroll at all initially
    scrollTimeout = setTimeout(onIdle, 5000);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <motion.div
    initial={{ y: 500, x: 200 }} // Start from below the viewport
    animate={{ y: [500, 0, 0], x: [200, 0, 0] }} // Move up first, then bounce
    transition={{
      duration: 2.5,
      ease:'easeInOut'
    }}
    style={{
      position: "relative",
      width: "100%",
      height: "1rem",
      zIndex: 100,
    }}
    >
    <motion.div
    initial={{ y: 0, x: 0 }} // Start from below the viewport
    animate={{ y: [0, -6, 0], x: [0, -2, 0] }} // Move up first, then bounce
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: ['easeIn', 'easeOut'],
      }}
    >
        <Image
          src="/arrow_ashish.png"
          alt="Name tag with arrow"
          width={150}
          height={150}
          quality={100}
          className="absolute right-[16%] -top-16"
        />
    </motion.div>
    </motion.div>
  );
}