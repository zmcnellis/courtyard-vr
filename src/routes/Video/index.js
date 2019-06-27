import React from 'react'
import styled from 'styled-components'
import WelcomeHero from '../../components/WelcomeHero'
import Header from '../../components/Header'
import { useTheme } from '../../utils/hooks'

const Video = ({ env }) => {
  const { image } = useTheme('thankYou')

  return (
    <React.Fragment>
      <Header />
      <WelcomeHero image={image} />
      <Wrapper>
        <Heading>
          <span role='img' aria-label='Under Construction'>
            👷{' '}
          </span>
          Under Construction
        </Heading>
      </Wrapper>
    </React.Fragment>
  )
}

const Wrapper = styled.div`
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  outline: inherit;
  text-decoration: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  text-align: center;
  padding: 50px 0;
`

const Heading = styled.div`
  color: ${props => props.theme.colors.primary};
  font-weight: normal;
  text-transform: uppercase;
  width: 90%;
  padding-bottom: 8px;
  font-size: 24px;

  @media screen and (min-width: 600px) {
    font-size: 32px;
    max-width: 450px;
  }
`

export default Video
