'use client'

import Link from "next/link";
import Image from 'next/image';
import { useState } from 'react';
import AshishSharmaImg from '/public/ashish_sharma.png';

export default function HeroAshishImg(){
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e:any) => {
      // if(e.clientX > 239 && e.clientY > 240){

      // }
      // console.log(e.clientY)
      const linkRect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - linkRect.left;
      const y = e.clientY - linkRect.top;
      setPosition({ x, y });
    };
  
    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    return(
        <Link className='hover-link' style={{position:"relative"}} href={"/about-me"} 
            onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}> Ashish
            <Image
              src={AshishSharmaImg}
              alt="Black and white portait of Ashish Sharma"
              sizes="100vw"
              className='hover-image'
              style={{ transform: `translate(${position.x}px, ${position.y}px)` }}/>
            </Link>
    )
}