"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
 
export default function MoveImage(image: any) {
 
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
        <Image
          src={image.path}
          alt="Moving Image"
          style={{
            position: 'fixed', // Keep it in view
            top: '0',
            left: '50%',
            transform: `translate(-50%, ${scrollPosition * 0.5}px)`, // Move the image based on scroll
            transition: 'transform 0.1s ease-out' // Smooth movement
          }}
          className='-z-10'
        />
    );
}