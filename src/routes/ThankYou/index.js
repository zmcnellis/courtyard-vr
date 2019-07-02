import React from 'react'
import styled from 'styled-components'
import ThankYouForm from '../../components/ThankYouForm'
import ThankYouHero from '../../components/ThankYouHero'
import Header from '../../components/Header'
import { useTheme } from '../../utils/hooks'

const ThankYou = ({ env, history }) => {
  const { heading, text, buttonText, image } = useTheme('thankYou')

  return (
    <React.Fragment>
      <Header />
      <ThankYouHero image={image} />
      <Wrapper>
        <Heading>{heading}</Heading>
        <Text>{text}</Text>
        <ThankYouForm buttonText={buttonText} history={history} env={env} />
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
  padding: 20px 0 50px 0;
`

const Heading = styled.h1`
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

const Text = styled.h2`
  font-size: 18px;
  font-weight: normal;
  text-align: left;
  color: #fff;
  width: 90%;
  margin-top: 0;
  padding: 0;

  @media screen and (min-width: 600px) {
    max-width: 450px;
  }
`

export default ThankYou
