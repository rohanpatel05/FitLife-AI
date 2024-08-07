import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../configs/colors";

export const Container = styled.div`
  padding: 4rem 3rem 2rem;
`;

export const LinkRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;

  @media (max-width: 535px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

export const Logo = styled.div`
  font-family: AkayaKanadaka;
  font-size: 1.3rem;
  font-weight: 900;
`;

export const PageLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 535px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const PageLink = styled(Link)`
  margin: 0 1rem;
  text-decoration: none;
  color: ${colors.black};
  font-size: 0.8rem;
  font-family: RobotoBold;

  &:hover {
    text-decoration: underline;
  }
`;

export const MediaLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const MediaLink = styled(Link)`
  margin: 0 0.2rem;
  text-decoration: none;
  color: ${colors.black};
  font-size: 1rem;
`;

export const PolicyRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-top: 4rem;
  border-top: 0.1rem solid;

  @media (max-width: 535px) {
    flex-direction: column-reverse;
    gap: 1rem;
    margin-top: 2.5rem;
  }
`;

export const PolicyLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const Rights = styled.p`
  margin: 0 0.2rem;
  padding: 1rem 0rem;
  color: ${colors.black};
  font-size: 0.7rem;
  font-family: RobotoLight;
  text-decoration: none;
`;

export const PolicyWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 535px) {
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
  }
`;

export const UnderlinedPolicy = styled(Link)`
  margin: 0 0.2rem;
  padding: 1rem 0rem;
  color: ${colors.black};
  font-size: 0.7rem;
  font-family: RobotoLight;

  text-decoration-line: underline;
  text-decoration-thickness: 0.05rem;

  @media (max-width: 535px) {
    padding: 0;
  }
`;
