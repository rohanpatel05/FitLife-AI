import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../configs/colors";

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 3rem;
  color: ${colors.black};
  border-bottom: 0.1rem solid;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  margin: 0 1rem;
  text-decoration: none;
  color: ${colors.black};
  font-size: 1.1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const Logo = styled.div`
  font-size: 2rem;
  text-align: center;
  font-family: AkayaKanadaka;
`;

export const SignUpButton = styled(Link)`
  background-color: ${colors.black};
  color: ${colors.white};
  padding: 0.5rem 1rem;
  border: none;
  text-decoration: none;
  font-size: 1.1rem;

  &:hover {
    background-color: ${colors.blue};
  }
`;
