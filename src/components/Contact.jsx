import { useState } from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import strings from "./data/strings";
import { contactInfo } from "./data/objs.js";
import { contactSocials } from "./data/objs.js";

export default function Contact() {
  
  return (
    <section id="contact" className="py-10 md:py-24 px-2 md:px-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-4 md:mb-12 max-w-2xl mx-auto">
          {strings.contactText}
        </p>
        <div className="md:flex justify-center items-center">
          <h3 className="hidden md:flex md:-rotate-90  tracking-widest">Contact Information</h3>
          <div className="text-center md:flex gap-4 md:w-100 md:x-auto bg-primary/5">
            <div className="flex md:flex-col justify-center items-center p-3  md:py-3 gap-6 bg-primary/10 w-40 md:w-12 mx-auto mb-4 md:mb-0">
              {contactSocials.map(scl => {
                const SocialsIcon = scl.logo;
                return (
                  <a href={scl.link} target="_blank" key={scl.id}>
                    {SocialsIcon && <SocialsIcon className="text-primary" size={24}/>}
                  </a>
                )
              })}
            </div>
            <div className="flex flex-col justify-center gap-1 w-40 md:w-70 mx-auto">
              {contactInfo.map(info => {
                // console.log(info);                
                const InfoLogo = info.logo;
                return (
                  <div key={info.id} className="flex items-center gap-1">
                    <div className="md:p-3 rounded-full bg-primary/10">
                      {InfoLogo && <InfoLogo  className="h-3 w-3 md:h-6 md:w-6 text-primary"/>}
                    </div>
                    <div>
                      <p className="text-xs md:text-xl text-muted-foreground hover:text-primary transition-colors md:p-3">
                        {info.title}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>          
        </div>
      </div>      
    </section>
  )
}
