import React, { useState } from "react";
import ShineBorder from "../magicui/shine-border";

interface PropsCategory {
  categories: string[];
  handleProject: (category: string) => void;
  showCard: string;
}

const Select = ({ categories, handleProject, showCard }: PropsCategory) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
    <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} borderWidth={2} className="p-1 bg-secondary/60 backdrop-blur-sm justify-center items-center flex">
      <button
        onClick={toggleDropdown}
        className="text-secondary-foreground font-bold rounded-lg text-sm px-5 py-2.5 items-center text-center justify-center inline-flex w-full z-10"
        type="button"
      >
        {showCard}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      </ShineBorder>

      {isOpen && (
        <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} borderWidth={2} className="mt-2">
        <div className="z-1 divide-y divide-secondary-foreground rounded-lg shadow w-full bg-secondary/60 backdrop-blur-sm">
          <ul
            className="py-2 text-sm text-secondary-foreground"
            aria-labelledby="dropdownDefaultButton"
          >
            {categories.map((category, index) => (
              <li key={index} className="hover:bg-background/60 hover:backdrop-blur-sm hover:font-bold">
                <a
                  href="#"
                  className="block px-4 py-2"
                  onClick={() => {
                    handleProject(category);
                    setIsOpen(false);
                  }}
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
        </ShineBorder>
      )}
    </>
  );
};

export default Select;
