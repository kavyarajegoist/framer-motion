 "use client"
 import {motion} from "motion/react"
 const animation1 = ()=>{
    return (
      <>
        <div
          className="flex h-screen w-full items-center justify-center"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)",
              backgroundSize: "20px 20px",
              backgroundRepeat:"repeat"
          }}
        >
          <motion.button  whileHover={{rotateY:-10,rotateX:-25,y:-5,boxShadow:"0px 20px 30px rgba(8,112,184,0.7)"}} transition={{duration:0.2,ease:"easeInOut"}}
          whileTap={{y:0}}
           className="group relative cursor-pointer rounded-lg bg-black px-12 py-4 font-medium  shadow-[0px_1px_0px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]">
            <span className="group-hover:text-cyan-400 transition-colors duration-200">Sign In</span>
            <span className="absolute inset-x-0 bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></span>
            <span className="absolute inset-x-0 bottom-px mx-auto h-1 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 blur-sm group-hover:opacity-100"></span>
          </motion.button>
        </div>
      </>
    );
}

export default animation1;