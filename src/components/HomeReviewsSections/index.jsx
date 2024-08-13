import React from 'react'
import { FaStar } from "react-icons/fa";
import { 
  Container, 
  Title,
  Description,
  Reviews,
  ReviewCard,
  Stars,
  Review,
  SignatureWrapper,
  ReviewerName,
  ReviewerTitle 
} from './HomeReviewsSectionElements';
import { 
  HOME_REVIEWS_DESCRIPTION, 
  HOME_REVIEWS_REVIEWER, 
  HOME_REVIEWS_REVIEWER_TITLE, 
  HOME_REVIEWS_REVIEWS, 
  HOME_REVIEWS_STARS, 
  HOME_REVIEWS_TITLE 
} from '../../assets/texts/homeTexts';

function HomeReviewsSection() {
  return (
    <Container>
      <Title>{HOME_REVIEWS_TITLE}</Title>

      <Description>{HOME_REVIEWS_DESCRIPTION}</Description>

      <Reviews>
        {HOME_REVIEWS_REVIEWS.map((review, index) => (
          <ReviewCard key={index}>
            <Stars>
              {Array(HOME_REVIEWS_STARS[index])
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </Stars>

            <Review>{review}</Review>

            <SignatureWrapper>
              <ReviewerName>{HOME_REVIEWS_REVIEWER[index]}</ReviewerName>
              <ReviewerTitle>{HOME_REVIEWS_REVIEWER_TITLE[index]}</ReviewerTitle>
            </SignatureWrapper>
          </ReviewCard>
        ))}
      </Reviews>

    </Container>
  )
}

export default HomeReviewsSection