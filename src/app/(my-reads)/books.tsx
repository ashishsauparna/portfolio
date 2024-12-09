"use client"

import Image from 'next/image';
import Link from 'next/link';
import { motion, animate } from "motion/react";

export default function Books() {

  // const [limit, setLimit] = useState(
  //   {
  //     start: 0,
  //     end: 3
  //   }
  // );

    const books = [
      {
        href:"https://www.amazon.in/Lean-UX-Applying-Principles-Experience/dp/9352132785/ref=sr_1_3?crid=3W3CQ2YA1WSRE&keywords=lean+ux&qid=1654286399&sprefix=lean+ux%2Caps%2C309&sr=8-3",
        alt:"Book image of Lean UX book",
        src: "/books/lean_ux.png",
        name:"Lean UX"
      },
      {
        href:"https://www.amazon.in/Sprint-Solve-Problems-Test-Ideas/dp/150112174X",
        alt:"Book image of Sprint book",
        src: "/books/sprint.png",
        name:"Sprint"
      },
      {
        href:"https://thefutur.com/pocket-full-of-do",
        alt:"Book image of Pocket full of do book",
        src: "/books/pocket_full_of_do.png",
        name:"Pocket full of Do"
      },
      {
        href:"https://www.amazon.in/Steal-Like-Artist-Austin-Kleon/dp/0761169253",
        alt:"Image of Steal like and Artist book",
        src: "/books/steel_like_an_artist.png",
        name:"Steal like an Artist"
      },
      {
        href:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiDgeLA3cf1AhVa8HMBHTEDAikQFnoECAUQAQ&url=https%3A%2F%2Fwww.amazon.in%2FLogo-Design-Love-creating-identities%2Fdp%2F0321985206&usg=AOvVaw3okccZmKQHq-GwCD2onVwT",
        alt:"Image of Logo Design Love book",
        src: "/books/logo_design_love.png",
        name:"Logo Design Love"
      },
      {
        href:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiDgeLA3cf1AhVa8HMBHTEDAikQFnoECAUQAQ&url=https%3A%2F%2Fwww.amazon.in%2FLogo-Design-Love-creating-identities%2Fdp%2F0321985206&usg=AOvVaw3okccZmKQHq-GwCD2onVwT",
        alt:"Image of Thinkingwith type book",
        src: "/books/thinking_with_type.png",
        name:"Thinking with type"
      },
      {
        href:"https://www.amazon.in/Crushing-Great-Entrepreneurs-Business-Influence/dp/0062845020/ref=sr_1_2?crid=3EEVLHOOXNRNQ&keywords=crushing+it&qid=1642886516&sprefix=crushing%2Caps%2C294&sr=8-2",
        alt:"Image of Crushing it book",
        src: "/books/crusshing_it.png",
        name:"Crushing it"
      },
      {
        href:"https://www.amazon.in/AM-Club-Your-Morning-Elevate/dp/9387944891/ref=sr_1_1?keywords=5+am+club&qid=1642891301&sprefix=5+%2Caps%2C620&sr=8-1",
        alt:"Image of The 5am Club book",
        src: "/books/5_am_club.png",
        name:"The 5am Club"
      },
      {
        href:"https://www.amazon.in/Wings-Fire-Autobiography-Abdul-Kalam/dp/8173711461",
        alt:"Image of Wings of fire book",
        src: "/books/wings_of_fire.png",
        name:"Wings of fire"
      },
      {
        href:"https://www.amazon.in/Inner-Engineering-Yogis-Guide-Joy/dp/0143428845/ref=sr_1_3?crid=4SB2S3B6NQM1&keywords=inner+engineering+by+sadhguru+in+english&qid=1642891150&sprefix=inner+en%2Caps%2C294&sr=8-3",
        alt:"Image of Inner Engineering book",
        src: "/books/inner_eng.png",
        name:"Inner Engineering"
      },
    ]


    const fadeInAnimation = {
        initial:{
          opacity:0,
          y:40
        },
        animate: (index: number) => ({
          opacity: 1,
          y: 0,
          transition:{
            delay:0.2 * index,
            duration:0.4,
            type:"swing"
          },
        }),
        goback: (index: number) => ({
          opacity: 0,
          y: 40,
          transition:{
            delay:0.2 * index,
            duration:0.4,
            type:"swing"
          },
        })
      }

      return (
        <div className='items-left w-full mb-24'>
            <div className='avatar_grid'>
              {books.map((data, index) => (
                <motion.div
                key={index}
                variants={fadeInAnimation}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{
                  once:true
                }}>
                <Link key={index} href={data.href} target='_blank'>
  
                <div className='flex gap-4 mb-6'>
                  <div className='w-12 h-12'>
                    <Image src={data.src}
                    width={40}
                    height={40} 
                    alt={data.alt} 
                    className='object-cover w-full h-full'
                    />
                  </div>
                  <div>
                    <h3>{data.name}</h3>
                    <p className='-mt-2 link_button'>View on Amazon</p>
                  </div>
                </div>
                </Link>
                </motion.div>
              ))}
            </div>
          </div>
      )
  
    // return (
    //   <div className='items-left w-full'>
    //       <div className='book_grid'>
    //         {books.slice(limit.start, limit.end).map((book, index) => (
    //           <motion.div
    //           key={index}
    //           variants={fadeInAnimation}
    //           initial="initial"
    //           whileInView="animate"
    //           custom={index}
    //           viewport={{
    //             once:true
    //           }}>
    //           <Link href={book.href}>
    //             <Image
    //             src={book.src}
    //             alt={book.alt}
    //             sizes="100vw"
    //             width={200}
    //             height={300}
    //             className='book_image'/>
    //           </Link>
    //           </motion.div>
    //         ))}
    //       </div>
    //       <div className='mt-6 w-1/5' style={{display:"flex", gap:"4px"}}>
    //         {blankDivs}
    //       </div>
    //     </div>
    // )
  }
  