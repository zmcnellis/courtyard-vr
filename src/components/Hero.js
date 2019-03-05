import React from 'react'
import styled from 'styled-components'
import ImageFadeIn from 'react-image-fade-in'

const Hero = ({ image }) => {
  return (
    <Wrapper>
      <HeroImage
        src={image}
        image={image}
        as={ImageFadeIn}
        opacityTransition={0.75}
        loadAsBackgroundImage
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.colors.background};
`

const HeroImage = styled.div`
  @media screen and (min-width: 1024px) {
    background-image: url(${props => props.image});
    height: 800px;
    width: 80%;
    background-size: contain;
  }

  @media screen and (min-width: 500px) {
    background-image: url(${props => props.image});
    height: 500px;
  }

  width: 100%;
  height: 300px;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export default Hero
