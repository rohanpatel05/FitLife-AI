import React from 'react'
import { NavBarContainer, NavLink, NavLinks, Logo, SignUpButton } from './NavbarElements';

function Navbar() {
    return (
        <NavBarContainer>
            <NavLinks>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/aboutus">About Us</NavLink>
            </NavLinks>
            <Logo>FitLife AI</Logo>
            <SignUpButton to="/signup">Sign Up</SignUpButton>
        </NavBarContainer>
    );
}

export default Navbar