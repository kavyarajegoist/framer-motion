"use client"
import { cn } from "@/lib/utils"
import {GeistSans} from "geist/font/sans"
import { Card } from "@/components/ui/card"
const animation2 = ()=>{
    return(
        <>
        <div className={cn(GeistSans.className,
            "h-screen flex justify-center items-center bg-gray-50 text-neutral-800")}>
            <Card/>
        </div>
        </>
    )
}

export default animation2;