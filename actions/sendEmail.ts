"use server"
import { Resend } from "resend";
import React from "react"
const resend = new Resend(process.env.RESEND_API_KEY)

import { validateString,getErrorMessage } from "@/lib/util";
import {ContactFormEmail} from "@/email/contact-form-email"
export const sendEmail =async (formData:FormData)=>{
    const message=formData.get("message")
    const senderEmail=formData.get("senderEmail")
    if(!validateString(senderEmail,500)){
        return {
            error:"Invalid sender email"
        }
    }
    if(!validateString(message,5000)){
        return {
            error:"Invalid message"
        }
    }
    let data;
    try{

       data= await resend.emails.send({
            from:senderEmail as string,
            to:"parmanandprajapati006@gmail.com",
            subject:"Message from Contact",
            reply_to:senderEmail as string,
            // text:message as string,
            react:React.createElement(ContactFormEmail,{
                message:message as string,
                senderEmail:senderEmail as string
            })
        })    

    }
    catch(error:unknown){
        
        return {
            error:getErrorMessage(error)
        }
    }
    return {
        data
    }

}