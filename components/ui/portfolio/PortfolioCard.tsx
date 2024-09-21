import Image from "next/image";

export default function PortfolioCard({
    showCard,
    category,
    ImageHref,
    title,
    button,
    buttonHref,
  }) {
    
    return (
      <>
        <div
          className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
            showCard === "all" || showCard === category.toLowerCase()
              ? "block"
              : "hidden"
          }`}
        >
          <div className="relative mb-12">
            <div className="overflow-hidden rounded-[10px]">
              <Image src={ImageHref} alt="portfolio" className="w-full" width={500} height={500}/>
            </div>
            <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-secondary py-[34px] px-3 text-center shadow-md">
              <span className="text-primary mb-2 block text-sm font-medium">
                {category}
              </span>
              <h3 className="text-primary mb-5 text-xl font-bold">
                {title}
              </h3>
              <a
                href={buttonHref}
                className="text-primary hover:border-primary hover:bg-background/40 inline-block rounded-md border border-stroke py-[10px] px-7 text-sm font-medium transition hover:text-white"
              >
                {button}
              </a>
            </div>
          </div>
        </div>
      </>
    );
  };
  