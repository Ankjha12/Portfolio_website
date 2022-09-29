import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 10, text: "Project Experiene with MERN Stack And NEXT.JS" },
  { number: 5, text: "Successfull Project delivery" },
  { number: 4, text: "Different Teams i have worked with" },
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data &&
        data.map((card, index) => (
          <Box>
            <BoxNum>{card.number}+</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
