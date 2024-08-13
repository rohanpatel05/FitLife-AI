import React from 'react'
import {
  Container,
  Header,
  Title,
  Description,
  ImagePlaceholder,
  PlaceholderImage,
} from "./HomeWorkoutSectionElements"
import workoutPlaceholder from "../../assets/images/fitnessPlaceholder5.jpg";
import { HOME_WORKOUT_TITLE, HOME_WORKOUT_DESCRIPTION } from "../../assets/texts/homeTexts"

function HomeWorkoutSection() {
  return (
    <Container>
      <Header>
        <Title>{HOME_WORKOUT_TITLE}</Title>
        <Description>{HOME_WORKOUT_DESCRIPTION}</Description>
      </Header>
      <ImagePlaceholder>
        <PlaceholderImage
          src={workoutPlaceholder}
          alt="Workout Placeholder"
        />
      </ImagePlaceholder>
    </Container>
  )
}

export default HomeWorkoutSection