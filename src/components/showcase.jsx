import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import github from "../assets/github_Black.svg";
import liveLink from "../assets/link.svg";

function Showcase({ projectData, skillsData }) {
  const renderProjects = projectData.map((project, index) => {
    return (
      <div
        key={index}
        className="group/bg relative grid place-content-center overflow-clip rounded-lg bg-black  hover:cursor-pointer md:h-[180px] md:w-[268px] lg:h-[180px] lg:w-[268px]"
      >
        <img
          src={project.thumbnail}
          alt={project.name}
          className="w-full object-cover"
        />
        <div className="absolute left-0 top-0 flex h-0 w-full flex-col items-center justify-center bg-highlight bg-opacity-90 px-3 text-black opacity-0 duration-500 group-hover/bg:h-full group-hover/bg:opacity-100">
          <h1 className="text-center text-lg font-semibold md:text-base lg:text-base">
            {project.name}
          </h1>
          <p className="text-center md:text-sm lg:text-sm">
            {project.description}
          </p>
          <div className="mt-4 flex items-center justify-center gap-8 md:gap-6 lg:gap-6">
            <a
              href={project.github}
              className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-full bg-grey duration-500 hover:invert md:h-[36px] md:w-[36px] lg:h-[36px] lg:w-[36px]"
              target="_blank"
            >
              <img
                src={github}
                alt="github link"
                className="h-[24px] w-[24px] md:h-[36px] md:w-[36px] lg:h-[18px] lg:w-[18px]"
              />
            </a>
            <a
              href={project.liveLink}
              className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-full bg-grey duration-500 hover:invert md:h-[36px] md:w-[36px] lg:h-[36px] lg:w-[36px]"
              target="_blank"
            >
              <img
                src={liveLink}
                alt="live link"
                className="h-[22px] w-[22px] md:h-[15px] md:w-[15px] lg:h-[15px] lg:w-[15px]"
              />
            </a>
          </div>
        </div>
      </div>
    );
  });

  // rendering skill tab
  const renderSkills = skillsData.map((skill, index) => {
    return (
      <div
        key={index}
        className="flex w-[100px] items-center justify-start rounded-lg"
      >
        <img src={skill.logo} alt={skill.name} className="px-2" />
      </div>
    );
  });

  return (
    <Tabs
      className="mt-16 md:mt-8 lg:mt-8"
      selectedTabClassName="bg-bgBlack text-textPrimary rounded-lg border-none font-medium focus:outline-none"
    >
      <TabList className="flex justify-evenly rounded-lg bg-grey py-2">
        <Tab className="w-[160px] border-none py-3 px-8 text-center text-base  hover:cursor-pointer md:w-[240px] lg:w-[240px]">
          Projects
        </Tab>
        <Tab className="w-[160px] border-none py-3 px-8 text-center text-base hover:cursor-pointer md:w-[240px] lg:w-[240px]">
          Skills
        </Tab>
      </TabList>

      <TabPanel
        id="projectsContent"
        className="mt-3 grid gap-3 text-textPrimary md:flex md:flex-wrap md:gap-3 lg:flex lg:flex-wrap lg:gap-3"
      >
        {renderProjects}
      </TabPanel>
      <TabPanel
        id="skillsContent"
        className="mt-3 flex flex-wrap justify-between gap-4 text-textPrimary md:flex md:flex-wrap md:justify-start md:gap-3 lg:flex lg:flex-wrap lg:justify-start lg:gap-3"
      >
        {renderSkills}
      </TabPanel>
    </Tabs>
  );
}

export default Showcase;
