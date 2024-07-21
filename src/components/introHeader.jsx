import React from "react";

function IntroHeader({ introData }) {
  const renderSocials = introData.socials.map((social, index) => {
    return (
      <a
        href={social.link}
        key={index}
        className="flex h-[24px] w-[24px] items-start justify-center "
        target="_blank"
      >
        <img
          src={social.icon}
          alt="social icons"
          className={`${
            index === 0 ? "h-[20px] w-[20px]" : ""
          }h-[24px] w-[24px]`}
        />
      </a>
    );
  });

  // Just calculating years of experience dynamically to update every year
  const calculateYearsOfService = (startDate) => {
    const start = new Date(startDate);
    const today = new Date();
    const diff = today - start; // Difference in milliseconds
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); // Convert to years
    return years;
  };
  const startDate = "2018-12-17";
  const yearsOfService = calculateYearsOfService(startDate);
  return (
    <div>
      <div className="text-center text-textPrimary md:flex md:items-center md:justify-start md:gap-10 md:text-left lg:flex lg:items-center lg:justify-start lg:gap-10 lg:text-left">
        <div className="flex items-center justify-center">
          <img
            src={introData.logo}
            alt="Logo"
            className="h-[5rem] w-[5rem] md:h-[7rem] md:w-[7rem] lg:h-[7rem] lg:w-[7rem]"
          />
        </div>
        <div>
          <h1 className="mt-4 text-[2.125rem] font-medium md:text-[48px] md:font-bold lg:text-[48px] lg:font-bold">
            {introData.name}
          </h1>
          <h3 className="mt-4 text-sm font-normal text-grey">
            {introData.designation}
          </h3>
          <div className="mt-6 flex items-center justify-center gap-8 md:mt-4 md:justify-start md:gap-4 lg:mt-4 lg:justify-start lg:gap-4">
            {renderSocials}
          </div>
        </div>
      </div>
      <div className="mt-8 text-textPrimary">
        <blockquote className="text-center text-lg md:text-left lg:text-left">
          Hello 👋
        </blockquote>
        <blockquote className="mt-2 text-center text-lg  md:mt-0 md:text-left lg:mt-0 lg:text-left">
          I am a
          <span className="relative mx-3 inline-block before:absolute before:-inset-1 before:block before:-skew-y-2 before:bg-highlight">
            <span className="relative font-bold text-white">
              Software Engineer
            </span>
          </span>
          based in India with {yearsOfService} years of experience in Web
          Development, UI/UX Design and QA Automation.
        </blockquote>
      </div>
    </div>
  );
}

export default IntroHeader;
