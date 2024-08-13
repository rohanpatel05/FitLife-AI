import styled from "styled-components";
import colors from "../../configs/colors";

export const Container = styled.div`
  text-align: center;
  padding: 4rem 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1250px;
  width: 100%;

  @media (max-width: 535px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: left;
  flex: 1;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${colors.grey};
  margin-left: 2rem;
  text-align: left;
  flex: 1;

  @media (max-width: 535px) {
    margin-left: 0;
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
