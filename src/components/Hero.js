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
  background-color: rgba(0, 0, 0, 0.3);
`

const HeroImage = styled.div`
  @media screen and (min-width: 500px) {
    height: 400px;
    background-size: cover;
  }

  @media screen and (min-width: 1024px) {
    height: 450px;
    background-size: contain;
  }

  width: 100%;
  height: 200px;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export default Hero
