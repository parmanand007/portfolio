import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitBtn = () => {
    const {pending}=useFormStatus();
    return (
    <button type="submit" className=" group flex h-[3rem] w-[8rem] items-center justify-center gap-2 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 
    dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opactiy-65
    ">
        {
            pending ? (<div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>):(
                <>
        Submit{" "}<FaPaperPlane  className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 "/>{" "}
                </>
            )
        }
        </button>
  )
}

export default SubmitBtn