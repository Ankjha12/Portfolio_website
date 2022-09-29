import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  WorkDesignationTimelineWrapper,
  WorkExperienceDesignation,
  WorkExperienceTimeline,
  WorkExperienceWrapper,
} from "../TimeLine/TimeLineStyles";
import {
  ListContainer,
  ListItem,
  ListParagraph,
} from "./WorkExperienceListStyle";
import { TiMediaRecord } from "react-icons/ti";

const WorkExperienceListContentData = [
  `Worked on most in-demand technologies of the Industry with MERN Stack and MySql.`,
  " Developed full stack application (Food Service Reviews) across various platforms using latest industry-adopted technologies and frameworks.",
  " Gained hands-on expertise in  html, css, bootstrap, React.js, Node JS and Relational and Non-Relational databases like mongoDB and mySql.",
  " Played a key role in the development, improvement and operation of web-based software.",
  " Worked closely with the web development team including project and project manager.",
  "Worked on more than total of 5 live US-based organisation Projects and completed Successfully with the Team members.",
];

const WorkExperienceList = () => {
  return (
    <ListContainer>
      <SectionDivider />
      <br />
      <SectionTitle>Work Experience</SectionTitle>
      <WorkExperienceWrapper>
        FargoWiz Software Service Pvt. Ltd.&nbsp; (Mansarovar Plaza, Jaipur,
        Rajasthan)
        <WorkDesignationTimelineWrapper>
          <WorkExperienceDesignation>
            <h4>Full Stack Developer</h4>
            <p>01-02-2022 - Present</p>
          </WorkExperienceDesignation>
          {/* <WorkExperienceTimeline>01-02-2022 - Present</WorkExperienceTimeline> */}
        </WorkDesignationTimelineWrapper>
      </WorkExperienceWrapper>
      <ListItem>
        {WorkExperienceListContentData &&
          WorkExperienceListContentData.map((item) => (
            <ListParagraph>
              <TiMediaRecord
                size="2rem"
                style={{ marginRight: "10px", marginTop: "4px" }}
              />
              {item}
            </ListParagraph>
          ))}
      </ListItem>
    </ListContainer>
  );
};

export default WorkExperienceList;
