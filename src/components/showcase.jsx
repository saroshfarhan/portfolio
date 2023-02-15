import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Showcase() {
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

      <TabPanel id="projectsContent" className="mt-3 text-textPrimary">
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel id="skillsContent" className="mt-3 text-textPrimary">
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  );
}

export default Showcase;
