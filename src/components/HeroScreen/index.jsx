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
import fitnessPlaceholder1 from "../../assets/images/fitnessPlaceholder11.jpg"
import { HERO_DESCRIPTION, HERO_TITLE } from '../../assets/texts/homeTexts';

function HeroScreen() {
    return (
        <Container>
          <Header>
            <Title>{HERO_TITLE}</Title>

            <Description>{HERO_DESCRIPTION}</Description>

            <ButtonContainer>
              <Button $primary>Sign Up</Button>
              <Button>Learn More</Button>
            </ButtonContainer>
          </Header>
          
          <ImagePlaceholder>
            <PlaceholderImage
              src={fitnessPlaceholder1}
              alt="Fitness Placeholder"
            />
          </ImagePlaceholder>
        </Container>
      );
}

export default HeroScreen