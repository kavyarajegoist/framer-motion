"use client";
import { IconCheck } from "@tabler/icons-react";
import { motion, useAnimate } from "motion/react";
const AnimatedSequence = () => {
  const [scope, animate] = useAnimate();

  const startAnimating = async() => {
    animate(
      ".text",
      {
        display: "none",
      },
      {
        duration: 0.1,
      },
    );
    await animate(
      "button",
      {
        width: "0rem",
      },
      { duration: 0.3, ease: "easeInOut" },
    );
    animate('.spinning-circle',{
        opacity:1,
        scale:[0,1.2,0.8,1]
    },{
        duration:0.5
    })
  };
  return (
    <>
      <div
        ref={scope}
        className="relative flex h-20 w-[30rem] items-center justify-center"
      >
        <motion.button
          onClick={() => startAnimating()}
          style={{ width: "30rem" }}
          className="h-20 cursor-pointer rounded-lg bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-500 font-medium text-white"
        >
          <span className="text">Pay Now $34</span>
        </motion.button>
        <motion.div initial={{opacity:0,scale:0}} className="spinning-circle h-20 w-20 bg-green-500 rounded-full absolute inset-0 m-auto flex items-center justify-center text-white">
           <IconCheck className="w-10 h-10"/> 
        </motion.div>
      </div>
    </>
  );
};

export default AnimatedSequence;
