import React from "react";
import contact from "../assets/contact.svg";
import download from "../assets/download.svg";

function Cta() {
  return (
    <div
      id="cta"
      className="mt-16 flex flex-row items-center justify-between gap-5"
    >
      <button
        type="button"
        className="inline-flex  basis-1/2 cursor-pointer items-center justify-center gap-2 rounded-lg border border-textPrimary bg-none px-5 py-4 text-sm font-medium text-textPrimary"
      >
        Download CV
        <img src={download} alt="download icon" className="h-[15px] w-[15px]" />
      </button>

      <button
        type="button"
        className="inline-flex basis-1/2 cursor-pointer items-center justify-center gap-2 rounded-lg  bg-highlight px-6 py-[18px] text-sm font-medium text-textPrimary hover:bg-[#9154fb]"
      >
        Contact Me
        <img src={contact} alt="contact icon" className="h-[15px] w-[15px]" />
      </button>
    </div>
  );
}

export default Cta;
