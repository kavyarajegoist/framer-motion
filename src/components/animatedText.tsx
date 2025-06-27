"use client"
import { stagger, useAnimate } from "motion/react";
import { useEffect } from "react";
import {motion} from "motion/react";
const AnimatedText = () => {
    const [scope,animate] = useAnimate();
    useEffect(()=>{
      startAnimating();
    },[]);
    const startAnimating = ()=>{
        animate("span",{
            opacity:1,
            filter:"blur(0px)",
            y:0
        },{
            duration:0.7,
            ease:"easeInOut",
            delay:stagger(0.02)
        })
    }
  const text =
    "Welcome to F*** C***. The first rule of F*** C*** is that you don't talk about F*** C***. The second rule of F*** C*** is that you don't talk about F*** C***.";
  return (
    <>
      <div ref={scope} className="text-white max-w-4xl mx-auto font-bold text-4xl"> 
        {/* <motion.span initial={{opacity:0}} className="inline-block">

        {text}
        </motion.span> */}
        {text.split(" ").map((word,index)=>(
            <motion.span initial={{opacity:0,filter:"blur(10px)",y:10}} key={index} className="inline-block">
                {word} &nbsp;
            </motion.span>
        ))}
      </div>
    </>
  );
};

export default AnimatedText;
