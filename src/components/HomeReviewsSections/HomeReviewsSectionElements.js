import styled from "styled-components";
import colors from "../../configs/colors";

export const Container = styled.div`
  padding: 2rem;
  text-align: center;
  padding: 4rem 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const Reviews = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1250px;
  width: 100%;

  @media (max-width: 535px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

export const ReviewCard = styled.div`
  flex: 1;
  padding: 1rem;
  border: 1px solid ${colors.black};
  border-radius: 0;
  margin: 0 1rem;
  text-align: left;

  @media (max-width: 535px) {
    margin: 0;
  }
`;

export const Stars = styled.div`
  display: flex;
  font-size: 1rem;
  color: black;
`;

export const Review = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
`;

export const SignatureWrapper = styled.div`
  margin-top: 1rem;
`;

export const ReviewerName = styled.p`
  font-family: RobotoBold;
`;

export const ReviewerTitle = styled.p`
  font-size: 0.9rem;
  color: ${colors.grey};
`;
