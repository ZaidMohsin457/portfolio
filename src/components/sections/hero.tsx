import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, Github, Linkedin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full min-h-screen")}>
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div
          className={cn(
            "min-h-[50dvh] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-center items-center md:items-start",
            "px-6 py-16 sm:px-8 sm:py-20 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "mt-2 md:mt-4 font-thin text-sm sm:text-base md:text-lg text-slate-500 dark:text-zinc-400",
                      "cursor-default font-display bg-clip-text"
                    )}
                  >
                    Hi, I am
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "leading-none font-thin text-transparent text-slate-800",
                          "font-thin text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
                          "cursor-default text-edge-outline font-display"
                        )}
                      >
                        <span className="block">{config.author.split(" ")[0]}</span>
                        <span className="block">{config.author.split(" ")[1]}</span>
                        <span className="block">{config.author.split(" ")[2]}</span>
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      theres something waiting for you in devtools
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>
                
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "mt-2 md:mt-4 font-thin text-xs sm:text-sm md:text-base lg:text-lg text-slate-500 dark:text-zinc-400",
                      "cursor-default font-display bg-clip-text max-w-[280px] sm:max-w-none"
                    )}
                  >
                    <span className="hidden sm:inline">A Full Stack Web/Mobile App Developer | AI/ML Researcher</span>
                    <span className="sm:hidden">Full Stack Developer<br />AI/ML Researcher</span>
                  </p>
                </BlurIn>
              </div>
              
              <div className="mt-6 md:mt-8 flex flex-col gap-3 w-full sm:w-fit">
                <Link
                  href={
                    "https://drive.google.com/file/d/1dv59zXE_NyholVqLSk9f003NergORrTH/view?usp=drive_link"
                  }
                  target="_blank"
                  className="flex-1"
                >
                  <BoxReveal delay={2} width="100%">
                    <Button className="flex items-center justify-center gap-2 w-full">
                      <File size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Resume</span>
                    </Button>
                  </BoxReveal>
                </Link>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="overflow-hidden text-sm"
                        >
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>pls 🥹 🙏</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  <div className="flex items-center gap-2">
                    <Link
                      href={config.social.github}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"} size="icon" className="w-9 h-9 sm:w-10 sm:h-10">
                        <SiGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                      </Button>
                    </Link>
                    <Link
                      href={config.social.linkedin}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"} size="icon" className="w-9 h-9 sm:w-10 sm:h-10">
                        <SiLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Empty column for 3D keyboard space on desktop */}
        <div className="hidden md:block col-span-1"></div>
      </div>
      
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
