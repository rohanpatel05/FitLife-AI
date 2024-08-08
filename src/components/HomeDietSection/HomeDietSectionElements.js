import styled from "styled-components";
import colors from "../../configs/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem 2.2rem;
  align-items: center;

  @media (max-width: 535px) {
    flex-direction: column;
  }
`;

export const InfoWrapper = styled.div`
  text-align: left;
  padding: 1rem;
  padding-left: 4rem;
  max-width: 700px;

  @media (max-width: 535px) {
    padding: 0;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: ${colors.grey};
  margin-bottom: 2rem;
`;

export const FeatureContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 700px;
  margin-bottom: 2rem;
`;

export const Feature = styled.div`
  text-align: left;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-align: left;
`;

export const FeatureDescription = styled.p`
  font-size: 1rem;
  color: ${colors.grey};
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const PlaceholderImage = styled.img`
  width: 80%;
  height: auto;
  background-color: ${colors.grey};

  @media (max-width: 535px) {
    width: 100%;
  }
`;
