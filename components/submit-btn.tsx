import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitBtn = () => {
    const {pending}=useFormStatus();
    return (
    <button type="submit" className="group flex h-[3.2rem] w-[10rem] items-center justify-center gap-2 rounded-full bg-slate-950 text-sm font-semibold text-white outline-none transition-all hover:-translate-y-0.5 hover:bg-slate-800 focus:scale-105 active:scale-[0.98]
    dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:opacity-65
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
