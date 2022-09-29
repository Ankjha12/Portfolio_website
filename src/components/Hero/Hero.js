import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row noPadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There, I'm Ankit Jha <br />
        Welcome to my personal Portfolio.
      </SectionTitle>
      <SectionText>
        I am a <b>Full Stack Developer </b> having approx 1 Year of Industry
        experience working with most in demand technologies Stack like MERN
        STACK and Relational databases{" "}
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://www.linkedin.com/in/ankit-jha-44253220b")
        }
      >
        Know More...
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
