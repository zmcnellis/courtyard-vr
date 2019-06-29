import React from 'react'
import styled from 'styled-components'
import WelcomeHero from '../../components/WelcomeHero'
import Header from '../../components/Header'
import { useTheme } from '../../utils/hooks'

const Video = ({ env }) => {
  const { image, video } = useTheme('thankYou')

  return (
    <React.Fragment>
      <Header />
      <WelcomeHero image={image} />
      <Heading>Thank You!</Heading>
      <IFrameWrapper>
        <IFrame
          src={video}
          frameborder='0'
          allow='autoplay; fullscreen'
          allowfullscreen
        />
      </IFrameWrapper>
    </React.Fragment>
  )
}

const IFrameWrapper = styled.div`
  @media screen and (min-width: 500px) {
    width: 60%;
    padding: 40% 0 0 0;
  }

  @media screen and (min-width: 1024px) {
    width: 40%;
    padding: 27% 0 0 0;
  }

  width: 90%;
  padding: 66% 0 0 0;
  position: relative;
  margin: 0 auto;
`

const IFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`

const Heading = styled.div`
  color: ${props => props.theme.colors.primary};
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  padding: 40px 0 0 0;
  font-size: 24px;

  @media screen and (min-width: 600px) {
    font-size: 32px;
  }
`

export default Video
