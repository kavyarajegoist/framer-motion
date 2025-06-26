"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {motion} from "motion/react"
type Card = {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
};

const cards: Card[] = [
  {
    description: "Lana Del Rey",
    title: "Born To Die",
    src: "/images/animation5/first.jpg",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com/album/2WfaOiMkCvy7F5fcp2zZ8L",
    content: () => (
      <p>
        Born To Die is the second studio album by American singer-songwriter
        Lana Del Rey. Released in 2012, the album features cinematic production
        and melancholic themes, and includes hit singles like "Video Games" and
        "Summertime Sadness". It received critical acclaim and established Lana
        Del Rey as a major figure in pop music.
      </p>
    ),
  },
  {
    description: "Frank Ocean",
    title: "Blonde",
    src: "/images/animation5/second.jpg",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf",
    content: () => (
      <p>
        Blonde is the second studio album by American singer Frank Ocean.
        Released in 2016, the album is known for its experimental sound,
        introspective lyrics, and genre-blending style. Tracks like "Nikes" and
        "Self Control" have become modern classics, and the album is widely
        regarded as one of the best of the decade.
      </p>
    ),
  },
  {
    description: "Kendrick Lamar",
    title: "DAMN.",
    src: "/images/animation5/third.jpg",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com/album/4eLPsYPBmXABThSJ821sqY",
    content: () => (
      <p>
        DAMN. is the fourth studio album by American rapper Kendrick Lamar.
        Released in 2017, the album explores themes of faith, struggle, and
        identity, and features hit singles like "HUMBLE." and "DNA.". The album
        won the Pulitzer Prize for Music, making Kendrick the first
        non-classical or jazz artist to receive the honor.
      </p>
    ),
  },
];
export const LayoutCard = () => {
  const [current, setCurrent] = useState<Card | null>(null);
  const useOutsideClick = (callback:()=>void)=>{
    const ref =  useRef<HTMLDivElement>(null);
    useEffect(()=>{
     const handleClick = (event:MouseEvent)=>{
        if(ref.current && !ref.current.contains(event.target as Node)){
            callback();
        }
     }
     document.addEventListener("click",handleClick);
     return ()=>{
        document.removeEventListener("click",handleClick);
     }
    },[callback]);
    return ref;
  };
  const ref = useOutsideClick(()=>setCurrent(null));
  return (
    <>
      <div className="relative min-h-screen bg-gray-200 py-40">
        {current && <div className="fixed z-10 backdrop-blur-sm inset-0 w-full h-full bg-black/50"></div>}
        {current && (
          <motion.div 
          layoutId={`card-${current.title}`}
          
          ref={ref} 
          className="flex h-[550px] fixed inset-0 z-20 m-auto w-80 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4">
            <motion.img
             layoutId={`card-image-${current.title}`}
              src={current.src}
              alt={current.title}
              className="mb-5 aspect-square h-60 rounded-xl"
            />
            <div className="item-center flex flex-col justify-between gap-4">
                <div className="flex justify-between w-full ">

              <div className="flex flex-col items-start gap-2">
                <motion.h2 layoutId={`card-title-${current.title}`} className="text-xs font-bold tracking-tight text-black">
                  {current.title}
                </motion.h2>
                <motion.p className="text-[10px] text-neutral-500">
                  {current.description}
                </motion.p>
              </div>
                <motion.a
                  href={current.ctaLink}
                  className="flex items-center rounded-full bg-green-500 px-2 py-1 text-xs text-white"
                >
                  {current.ctaText}
                </motion.a>
                </div>
              <div className="h-40 overflow-auto border border-neutral-200 p-2 rounded-lg">{current.content()}</div>
            </div>
          </motion.div>
        )}
        <div className="mx-auto flex max-w-lg flex-col gap-10">
          {cards.map((card, idx) => (
            <motion.button
            layoutId={`card-${card.title}`}
              onClick={() => setCurrent(card)}
              key={card.title}
              className="flex cursor-pointer items-center justify-between rounded-lg border border-neutral-200 bg-white p-4"
            >
              <div className="flex items-center gap-4">
                <motion.img
                layoutId={`card-image-${card.title}`}
                  src={card.src}
                  alt="logo"
                  width={500}
                  height={500}
                  className="aspect-square h-14 w-14 rounded-lg"
                />
                <div className="flex flex-col items-start gap-2">
                  <motion.h2 layoutId={`card-title-${card.title}`} className="text-xs font-bold tracking-tight text-black">
                    {card.title}
                  </motion.h2>
                  <motion.p className="text-[10px] text-neutral-500">
                    {card.description}
                  </motion.p>
                </div>
              </div>
              <motion.div  className="flex items-center rounded-full bg-green-500 px-2 py-1 text-xs text-white">
                {card.ctaText}
              </motion.div>
            </motion.button>
          ))}
        </div>
      </div>
    </>
  );
};
