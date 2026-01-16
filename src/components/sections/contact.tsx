"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader 
        id='contact' 
        className="relative mb-8 sm:mb-14 px-0" 
        title={
          <>
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
              LET&apos;S WORK <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              TOGETHER
            </span>
          </>
        } 
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 z-[9999]">
        <Card className="w-full bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-4 sm:mt-10 md:mt-20">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl">Contact Form</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Please contact me directly at{" "}
              <a
                target="_blank"
                href={`mailto:${config.email}`}
                className="text-primary hover:underline cursor-can-hover rounded-lg break-all"
              >
                {config.email}
              </a>{" "}
              or drop your info here.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
