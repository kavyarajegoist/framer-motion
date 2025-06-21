"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Vercel from "../../../public/vercel.svg";
import { Cross, MessageCircleIcon, MessageSquareText, X } from "lucide-react";
import { Icon24Hours, Icon360View, IconPlus } from "@tabler/icons-react";
import { AnimatePresence, easeInOut, motion } from "motion/react";
import { useState } from "react";

export const Card = () => {
    const [open,setOpen] = useState<boolean>(true);
  return (
    <>
    <AnimatePresence>

      {open && <motion.div
            exit={{opacity:0,scale:0.98,filter:"blur(10px)"}}
            transition={{duration:0.3,ease:easeInOut}}
        className={cn(
          "h-[27rem] min-h-[27rem] w-72 rounded-xl bg-white",
          "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
          "flex flex-col p-6",
        )}
      >
        <h2 className="text-[16px] font-bold">Eternity UI Component</h2>
        <p className="mt-2 text-[11px] font-medium text-neutral-400">
          A colleciton of beautiful UI components, lets get on with it.
        </p>
        <div className="flex items-center justify-center">
          <button
            className={cn(
              "cursor-pointer",
              "flex items-center justify-center gap-1 text-xs",
              "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
              "mt-4 rounded-sm px-2 py-1",
            )}
            onClick={()=>setOpen(!open)}
          >
            <Image
              src={Vercel}
              width={50}
              height={50}
              alt="logo"
              className="h-2 w-2"
            />
            Eternity
            <X size={"12px"} className="text-neutral-400" />
          </button>
        </div>
        <div className="relative mt-4 flex-1 rounded-lg border border-dashed border-neutral-200 bg-gray-200">
          <motion.div initial = {{opacity:0,scale:0.98,filter:"blur(10px)"}}
            whileHover={{opacity:1,scale:1,filter:"blur(0px)"}}
            transition={{duration:0.3,ease:"easeInOut"}}
      
           className="absolute inset-0 h-full w-full divide-y divide-neutral-200 rounded-lg bg-white">
            <div className="flex items-start gap-2 p-4 text-xs">
              <div className="flex h-7 w-7 items-center justify-center rounded-sm shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                <MessageSquareText className="h-4 w-4" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-medium text-neutral-600">
                  Eternity UI Components
                </p>
                <p className="text-[9px] text-neutral-400">
                  A collection of UI components
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 p-4 text-xs">
              <div className="flex h-7 w-7 items-center justify-center rounded-sm shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                <Icon360View className="h-4 w-4" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-medium text-neutral-600">
                  View from all angles.
                </p>
                <p className="text-[9px] text-neutral-400">
                  A enchance view for every angle
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 p-4 text-xs">
              <div className="flex h-7 w-7 items-center justify-center rounded-sm shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                <Icon24Hours className="h-4 w-4" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-medium text-neutral-600">
                  Available 24 hours
                </p>
                <p className="text-[9px] text-neutral-400">
                  Delivery at flash speed
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 px-4 py-4 text-xs">
              <div className="flex h-6 w-6  items-center justify-center rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] ">
                <IconPlus className="h-4 w-4 text-neutral-700" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-medium text-neutral-400">
                  Create Project
                </p>
             
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>}
    </AnimatePresence>
    </>
  );
};
