import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, there <br />
        I'm Aalok Tanwar
      </SectionTitle>
      <SectionText>
        Computer Science student at VIT Bhopal University.
      </SectionText>
      <a href='#contact'>
        <Button>Contact Me</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;