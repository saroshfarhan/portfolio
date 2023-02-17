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
  return (
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
  );
}

export default IntroHeader;
