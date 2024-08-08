import React from 'react'
import { 
    Container, 
    Header, 
    Title, 
    Description, 
    ButtonContainer, 
    Button, 
    ImagePlaceholder, 
    PlaceholderImage 
} from "./HeroScreenElements"
import fitnessPlaceholder from "../../assets/images/fitnessPlaceholder11.jpg"
import { HERO_DESCRIPTION, HERO_TITLE } from '../../assets/texts/homeTexts';
import { useNavigate } from 'react-router-dom';

function HeroScreen() {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/aboutus")
  }

  return (
    <Container>
      <Header>
        <Title>{HERO_TITLE}</Title>

        <Description>{HERO_DESCRIPTION}</Description>

        <ButtonContainer>
          <Button $primary>Sign Up</Button>
          <Button onClick={handleLearnMoreClick}>Learn More</Button>
        </ButtonContainer>
      </Header>

      <ImagePlaceholder>
        <PlaceholderImage
          src={fitnessPlaceholder}
          alt="Fitness Placeholder"
        />
      </ImagePlaceholder>
    </Container>
  );
}

export default HeroScreen