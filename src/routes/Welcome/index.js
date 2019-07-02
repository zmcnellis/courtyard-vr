import React from 'react'
import ReactGA from 'react-ga'
import styled from 'styled-components'
import Header from '../../components/Header'
import WelcomeHero from '../../components/WelcomeHero'
import ButtonLink from '../../components/ButtonLink'
import { useTheme } from '../../utils/hooks'

const Welcome = () => {
  const { heading, linkName, linkUrl, image } = useTheme('welcome')

  const handleClick = () => {
    ReactGA.event({
      category: 'Welcome',
      action: 'Clicked Continue',
      label: 'Button'
    })
  }

  return (
    <React.Fragment>
      <Header />
      <WelcomeHero image={image} />
      <Wrapper>
        <Heading>{heading}</Heading>
        <ButtonLink text={linkName} href={linkUrl} handleClick={handleClick} />
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

const Heading = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-weight: normal;
  font-size: 28px;
  text-transform: uppercase;
  width: 90%;
  padding-bottom: 8px;

  @media screen and (min-width: 600px) {
    font-size: 32px;
    max-width: 450px;
  }
`

export default Welcome
