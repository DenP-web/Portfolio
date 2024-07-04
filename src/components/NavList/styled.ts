import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../theme/globalStyles";

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
`
List.displayName = 'List'

export const SocialLink = styled.a`
  display: block;
  svg {
    width: 40px;
    height: 40px;
  }
  `
SocialLink.displayName = 'SocialLink'

export const StyledLink = styled(Link)`
  display: block;
  font-size: 22px;
  font-weight: 600;
  color: ${theme.colors.accent};

  span {
    color: black
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

StyledLink.displayName = "StyledLink";
