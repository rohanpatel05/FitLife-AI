import styled from "styled-components";
import colors from "../../configs/colors";

export const Container = styled.div`
  text-align: center;
  padding: 4rem 2rem;
`;

export const Header = styled.header`
  max-width: 580px;
  margin: 0 auto 2rem auto;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${colors.grey};
  margin-bottom: 2rem;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border: 1px solid ${colors.black};

  cursor: pointer;

  ${(props) =>
    props.$primary
      ? `
      background-color: ${colors.black};
      color: ${colors.white};
    `
      : `
      background-color: ${colors.backgroundWhite};
      color: ${colors.black};
    `}

  &:hover {
    background-color: ${colors.blue};
    color: ${colors.white};
    border: 1px solid ${colors.blue};
  }
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const PlaceholderImage = styled.img`
  width: 90%;
  height: auto;
  background-color: ${colors.grey};

  @media (max-width: 535px) {
    width: 100%;
  }
`;
