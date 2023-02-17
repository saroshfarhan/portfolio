import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import github from "../assets/github_Black.svg";
import liveLink from "../assets/link.svg";

function Showcase({ projectData }) {
  const renderProjects = projectData.map((project, index) => {
    return (
      <div
        key={index}
        className="group/bg relative grid place-content-center overflow-clip rounded-lg bg-black object-cover hover:cursor-pointer"
      >
        <img
          src={project.thumbnail}
          alt={project.name}
          className="w-full object-cover"
        />
        <div className="absolute left-0 top-0 flex h-0 w-full flex-col items-center justify-center bg-highlight bg-opacity-90 px-3 text-black opacity-0 duration-500 group-hover/bg:h-full group-hover/bg:opacity-100">
          <h1 className="text-lg font-semibold">{project.name}</h1>
          <p className="text-center">{project.description}</p>
          <div className="mt-4 flex items-center justify-center gap-8">
            <a
              href={project.github}
              className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-full bg-grey duration-500 hover:invert"
              target="_blank"
            >
              <img
                src={github}
                alt="github link"
                className="h-[24px] w-[24px] "
              />
            </a>
            <a
              href={project.liveLink}
              className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-full bg-grey duration-500 hover:invert"
              target="_blank"
            >
              <img
                src={liveLink}
                alt="live link"
                className="h-[22px] w-[22px]"
              />
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Tabs
      className="mt-16"
      selectedTabClassName="bg-bgBlack text-textPrimary rounded-lg border-none font-medium focus:outline-none"
    >
      <TabList className="flex justify-evenly rounded-lg bg-grey py-2">
        <Tab className="w-[140px] border-none py-3 px-8 text-center text-base  hover:cursor-pointer">
          Projects
        </Tab>
        <Tab className="w-[140px] border-none py-3 px-8 text-center text-base hover:cursor-pointer">
          Skills
        </Tab>
      </TabList>

      <TabPanel
        id="projectsContent"
        className="mt-3  grid gap-3 text-textPrimary"
      >
        {renderProjects}
      </TabPanel>
      <TabPanel id="skillsContent" className="mt-3 text-textPrimary">
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  );
}

export default Showcase;
