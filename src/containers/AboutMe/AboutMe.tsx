import React from "react";

import {
  AboutSection,
  AchievementsLink,
  FlexBox,
  PortfolioLink,
} from "./styled";
import { Text, Title } from "../../theme/globalStyles";

const AboutMe: React.FC = () => {
  return (
    <AboutSection>
      <Title fontSize={38}>Hello web company,</Title>
      <Title fontSize={160} $shuriken={"on"}>
        I’m Denys
      </Title>
      <FlexBox>
        <Text>
          <p>
            I am a beginner developer specializing in website development. I am
            eager to learn new technologies and methods. I can work in a team,
            meet deadlines and fulfill project requirements. My skills and
            motivation will add value to your development team. I would like to
            join and contribute to the success of the project.
          </p>
        </Text>
        <ul>
          <li>
            <AchievementsLink to={"/achievements"}>
              <span>If you want my CV</span>
            </AchievementsLink>
          </li>
          <li>
            <PortfolioLink to={"/projects"}>
              <span>Or my projects</span>
            </PortfolioLink>
          </li>
        </ul>
      </FlexBox>
    </AboutSection>
  );
};

export default AboutMe;
