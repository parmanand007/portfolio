"use client"
import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./section-heading";
import {motion} from "framer-motion"
import { useSectionInView } from "@/lib/hooks";
export default function Contact(){
    const { ref } = useSectionInView("Contact ");
 return (
    <motion.section ref={ref} id ="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1,
    }}
    viewport={{once:true}}
    >
        <SectionHeading>Contact me</SectionHeading>
        <p className="text-gray-700 -mt-6">Please contact me directly at{" "}<a className="underline" href="mailto:example@gmail.com">example@gmail.com</a>{" "} or through this form</p>

        <form className="mt-10 flex flex-col"
        action={async(formData) =>{
            console.log(formData)
        }}
        >
            <input type="email" required maxLength={100} className="h-14 px-4 rounded-lg borderBlack" placeholder="Your email"></input>
            <textarea required maxLength={1000} className="h-52 p-4 my-3 rounded-lg borderBlack" placeholder="Your message"/>
            <button type="submit" className=" group flex h-[3rem] w-[8rem] items-center justify-center gap-2 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 ">Submit <FaPaperPlane  className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 "/>{" "}</button>
        </form>
    </motion.section>
 )
} 