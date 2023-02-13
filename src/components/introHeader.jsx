import React from "react";

function IntroHeader({ introData }) {
  const renderSocials = introData.socials.map((social, index) => {
    return (
      <a
        href={social.link}
        key={index}
        className="flex h-[24px] w-[24px] items-start justify-center "
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
    <div className="text-center text-textPrimary">
      <div className="flex items-center justify-center">
        <img src={introData.logo} alt="Logo" className="h-[5rem] w-[5rem]" />
      </div>

      <h1 className="mt-4 text-[2.125rem] font-medium">{introData.name}</h1>
      <h3 className="mt-4 text-sm font-normal text-grey">
        {introData.designation}
      </h3>
      <div className="mt-6 flex items-center justify-center gap-8">
        {renderSocials}
      </div>
    </div>
  );
}

export default IntroHeader;
