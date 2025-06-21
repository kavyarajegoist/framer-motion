"use client";
import { cn } from "@/lib/utils";
import { IconChartBar, IconFile, IconHome, IconUser } from "@tabler/icons-react";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

type NavItem = {
    name:string,
    link:string,
    icon:any
}

const Animation3 = ()=>{
    const sidebarVariant = {
        open:{
            width:"16rem"
        },
        closed:{
            width:"6rem"
        }
    }

    const parentVariant = {
        open:{
            transition:{
                staggerChildren:0.08,
                delayChildren:0.2
            }
        },
        closed:{
            transition:{
                staggerChildren:0.05,
                delayChildren:-1
            }
        }
    }
    const childVariant = {
        open:{
            opacity:1,
            y:0,
        },
        closed:{
            opacity:0,
            y:-10
        }
    }
    const [open,setOpen] = useState(true);
    const navItems:NavItem[] = [
        {
            name:"Home",
            link:"/",
            icon:<IconHome/>
        },
        {
            name:"Analytics",
            link:"/",
            icon:<IconChartBar/>
        },
        {
            name:"Users",
            link:"/",
            icon:<IconUser/>
        },
        {
            name:"Document",
            link:"/",
            icon:<IconFile/>
        }
    ]
    return (
      <>
        <motion.div
          initial={false}
          animate={open ? "open" : "closed"}
          variants={sidebarVariant}
          transition={{duration:0.3}}
          className={cn(`h-screen border bg-neutral-50`)}
        >
          <nav className="item-start relative flex flex-col justify-center p-6">
            <div className="flex items-center justify-between gap-1">
              {open && <h2>Dashboard</h2>}
              <button
                className="z-10 rounded-full p-1 mr-0.5 shadow-md"
                onClick={() => setOpen(!open)}
              >
                <ChevronRight />
              </button>
            </div>
            <motion.ul
            variants={parentVariant}
            className="mt-5 space-y-4 p-2">
              {navItems.map((navItem) => (
                <motion.li
                variants={childVariant}
                  key={navItem.name}
                  className="rounded-md p-2 text-neutral-700 transition-colors duration-300 hover:bg-neutral-300"
                >
                  <a
                    href={open ? navItem.link : ""}
                    className="flex items-center gap-1"
                  >
                    {navItem.icon}
                    {open && navItem.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </motion.div>
      </>
    );
};

export default Animation3;