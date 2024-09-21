'use client'
import PortfolioCard from "@/components/ui/portfolio/PortfolioCard";
import React, { useState } from "react";
import { profile } from "@/lib/data/data";

export default function PortfolioSection() {
  const [showCard, setShowCard] = useState("All");
  const { projects } = profile

  const handleProject = (category: string) => {
    setShowCard(category);
  };

  const categories = [
    "All",
    "Front-End",
    "Back-End",
    "Full-Stack"
  ] 

  return (
    <>
      <section className="pt-20 pb-12">
        <div className="container mx-auto bg-secondary/40 backdrop-blur-sm p-10 rounded-lg">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <h1 className="text-4xl md:text-6xl font-semibold  bg-clip-text text-transparent bg-gradient-to-b from-background to-secondary-foreground text-shadow">
                  PORTFOLIO
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                {
                  categories.map((category, index) => (
                    <li className="mb-1" key={index}>
                      <button
                        onClick={() => handleProject(category)}
                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                          showCard === category
                            ? "activeClasses bg-secondary text-white"
                            : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-background hover:text-secondary"
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {
              projects.map(({ coverImage, categories, label, description, link, github }, index) => (
                <PortfolioCard
                  key={index}
                  coverImage={coverImage}
                  categories={categories}
                  label={label}
                  description={description}
                  link={link}
                  github={github}
                  showCard={showCard}
                />
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

