"use client";
import ProjectCard from "@/components/ui/cards/ProjectCard";
import React, { useState } from "react";
import DropdownButton from "@/components/ui/buttons/DropdownButton";
import { project } from "@/lib/types";

interface ProjectsProps {
  projects: project[]
}

export default function PortfolioSection({projects}: ProjectsProps) {
  const [showCard, setShowCard] = useState("All");

  const handleProject = (category: string) => {
    setShowCard(category);
  };

  const categories = ["All", "Front-End", "Back-End", "Full-Stack"];

  return (
    <>
      <section className="pt-20 pb-12 overflow-hidden">
        <div className="container mx-auto p-10 px-6 lg:px-8">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <h1 className="text-5xl md:text-6xl  font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-indigo-900">
                  PROJECTS
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-center ">
            <div className="p-8">
                <DropdownButton
                  categories={categories}
                  handleProject={handleProject}
                  showCard={showCard}
                />
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 gap-y-10 md:h-screen">
            {projects.map(
              (
                { coverImage, categories, title, description, link, github, projectSkills },
                index
              ) => (
                <ProjectCard
                  key={index}
                  coverImage={coverImage}
                  categories={categories}
                  title={title}
                  description={description}
                  link={link}
                  github={github}
                  showCard={showCard}
                  projectSkills={projectSkills}
                />
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
