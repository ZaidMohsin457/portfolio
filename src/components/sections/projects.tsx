"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";

import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-40">
      <SectionHeader id='projects' title="Projects" className="px-0" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {projects.map((project, index) => (
          <Modall key={project.src} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const Modall = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn w-full">
          <div
            className={cn(
              "relative w-full max-w-[400px] h-auto rounded-lg overflow-hidden",
              "shadow-md hover:shadow-lg transition-shadow duration-300"
            )}
            style={{ aspectRatio: "3/2" }}
          >
            <Image
              className="absolute w-full h-full top-0 left-0 hover:scale-[1.05] transition-all object-cover"
              src={project.src}
              alt={project.title}
              width={400}
              height={267}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none">
              <div className="flex flex-col h-full items-start justify-end p-4 sm:p-6">
                <div className="text-base sm:text-lg text-left text-white">{project.title}</div>
                <div className="text-xs bg-white text-black rounded-lg w-fit px-2 py-0.5">
                  {project.category}
                </div>
              </div>
            </div>
          </div>
        </ModalTrigger>
        <ModalBody className="w-[95vw] max-w-4xl max-h-[90vh] sm:max-h-[80%] overflow-auto mx-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-2 sm:gap-4 flex-col sm:flex-row">
            <button className="px-4 py-2 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-full sm:w-28">
              Cancel
            </button>
            <Link href={project.live} target="_blank" className="w-full sm:w-auto">
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-4 py-2 rounded-md border border-black w-full sm:w-28">
                Visit
              </button>
            </Link>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <div className="px-2 sm:px-4">
      <h4 className="text-lg sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-4 sm:mb-8">
        {project.title}
      </h4>
      <div className="flex flex-col sm:flex-row sm:justify-evenly max-w-full overflow-x-auto sm:overflow-visible gap-4 sm:gap-0">
        <div className="flex flex-row sm:flex-col-reverse justify-center items-center gap-2 text-2xl sm:text-3xl mb-4 sm:mb-8">
          <p className="text-xs sm:text-sm mt-1 text-neutral-600 dark:text-neutral-500">
            Frontend
          </p>
          {project.skills.frontend?.length > 0 && (
            <FloatingDock items={project.skills.frontend} />
          )}
        </div>
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-row sm:flex-col-reverse justify-center items-center gap-2 text-2xl sm:text-3xl mb-4 sm:mb-8">
            <p className="text-xs sm:text-sm mt-1 text-neutral-600 dark:text-neutral-500">
              Backend
            </p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>
      <div className="text-sm sm:text-base">
        {project.content}
      </div>
    </div>
  );
};
