import Image from "next/image";

export const About = () => {
  return (
    <>
      <section id="about" className="sm:p-10 lg:p-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="sm:columns-2">
            <Image
              className="sm:w-1/2 mb-10 sm:mb-0"
              src="https://th.bing.com/th/id/OIG..x5DGrfb1HXjpZELjMgm?pid=ImgGn"
              alt="about"
            />
            <div>
              <h2 className="text-bold text-2xl mb-3">
                Full Stack Web Developer
              </h2>
              <p className="mb-5 text-sm text-gray-400">
                Providing web solutions
              </p>
              <p className="text-gray-500 text-justify leading-10">
                Hello there! Im a full stack web developer, and Im very
                passionate and dedicated to my work. With more than 5 years of
                experience as a professional web developer, With this time
                period I have acquired the skills and knowledge necessary to
                make your project a success. I enjoy every step of the
                development process, from discussion and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
