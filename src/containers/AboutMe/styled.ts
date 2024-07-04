import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import plate from '../../assets/images/plate.svg'
import document from '../../assets/images/doc.svg'
import shurikenSVG from '/shuriken.svg'


export const AboutSection = styled.section`
  position: absolute;
  max-width: 1000px;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
AboutSection.displayName = 'AboutSection'


export const HelloTitle = styled.h3`
  font-size: 38px;
  font-weight: 800;
`
HelloTitle.displayName = 'HelloTitle'

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;
`
FlexBox.displayName = 'FlexBox'


const defaultStyles = css`
  position: relative;
  font-size: 20px;
  padding: 10px 0 10px 50px;
  display: block;
  background-position: left;
  background-size: 32px 40px;
  background-repeat: no-repeat;

  span {
    position: relative;
  }
  span::after {
    position: absolute;
      content: '';
      width: 16px;
      height: 16px;
      right: -14px;
      top: -10px;
      background-image: url(${shurikenSVG});
      background-repeat: no-repeat;
      background-size: cover;
  }
`

export const PortfolioLink = styled(Link)`
 ${defaultStyles};
 background-image: url(${plate});

`
export const AchievementsLink = styled(Link)`
 ${defaultStyles};
 background-image: url(${document});
 margin-bottom: 40px;
`