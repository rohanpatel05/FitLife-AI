import React from 'react'
import {
  Container, 
  InfoWrapper,
  Title,
  Description,
  FeatureContainer,
  Feature,
  FeatureTitle,
  FeatureDescription,
  ImagePlaceholder,
  PlaceholderImage
} from "./HomeDietSectionElements"
import dietPlaceholder from "../../assets/images/nutritionPlaceholder3.jpg"
import { 
  HOME_DIET_TITLE, 
  HOME_DIET_DESCRIPTION, 
  HOME_DIET_FEATURE_TITLES, 
  HOME_DIET_FEATURE_DESCRIPTIONS 
} from "../../assets/texts/homeTexts"

function HomeDietSection() {
  return (
    <Container>
      <InfoWrapper>
        <Title>{HOME_DIET_TITLE}</Title>

        <Description>{HOME_DIET_DESCRIPTION}</Description>

        <FeatureContainer>
          <Feature>
            <FeatureTitle>{HOME_DIET_FEATURE_TITLES[0]}</FeatureTitle>
            <FeatureDescription>{HOME_DIET_FEATURE_DESCRIPTIONS[0]}</FeatureDescription>
          </Feature>

          <Feature>
            <FeatureTitle>{HOME_DIET_FEATURE_TITLES[1]}</FeatureTitle>
            <FeatureDescription>{HOME_DIET_FEATURE_DESCRIPTIONS[1]}</FeatureDescription>
          </Feature>
        </FeatureContainer>
      </InfoWrapper>

      <ImagePlaceholder>
        <PlaceholderImage
          src={dietPlaceholder}
          alt="Placeholder"
        />
      </ImagePlaceholder>
    </Container>
  )
}

export default HomeDietSection