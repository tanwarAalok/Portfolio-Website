import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 3, text: 'Stars in CodeChef'},
  { number: 6502, text: 'Rank in HashCode', },
  { number: 9001, text: 'Rank in HackerCup Qualification Round', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
          </Box>
       ) )}
    </Boxes>
  </Section>
);

export default Acomplishments;
