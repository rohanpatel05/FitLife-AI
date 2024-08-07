import React from 'react'
import { 
  Container, 
  LinkRow, 
  Logo, 
  PageLinks, 
  PageLink, 
  MediaLinks, 
  MediaLink, 
  PolicyRow, 
  Rights, 
  UnderlinedPolicy, 
  PolicyWrapper
} from './FooterElements'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <Container>
      <LinkRow>
        <Logo>FitLife AI</Logo>

        <PageLinks>
          <PageLink to="/">Home</PageLink>
          <PageLink to="/aboutus">Features</PageLink>
        </PageLinks>

        <MediaLinks>
          <MediaLink>
            <FaFacebook />
          </MediaLink>

          <MediaLink>
            <FaInstagram />
          </MediaLink>

          <MediaLink>
            <FaXTwitter />
          </MediaLink>

          <MediaLink>
            <FaLinkedin />
          </MediaLink>

          <MediaLink>
            <FaYoutube />
          </MediaLink>
        </MediaLinks>
      </LinkRow>

      <PolicyRow>
        <Rights>© 2024 FitLife AI. All rights reserved.</Rights>
        
        <PolicyWrapper>
          <UnderlinedPolicy>Privacy Policy</UnderlinedPolicy>
          <UnderlinedPolicy>Terms of Service</UnderlinedPolicy>
          <UnderlinedPolicy>Cookies Settings</UnderlinedPolicy>
        </PolicyWrapper>
      </PolicyRow>
    </Container>
  )
}

export default Footer