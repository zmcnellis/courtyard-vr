import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import WelcomeHero from '../../components/WelcomeHero'
import ButtonLink from '../../components/ButtonLink'
import { useTheme } from '../../utils/hooks'

const Welcome = () => {
  const { heading, linkName, linkUrl, image } = useTheme('welcome')

  return (
    <React.Fragment>
      <Header />
      <WelcomeHero image={image} />
      <Wrapper>
        <Heading>{heading}</Heading>
        <ButtonLink text={linkName} href={linkUrl} />
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
  text-transform: uppercase;
  width: ${props => (props.fullWidth ? '90%' : 'calc(90% - 80px)')};
  padding-bottom: 8px;

  @media screen and (min-width: 600px) {
    max-width: 450px;
  }
`

export default Welcome
