import React from 'react'
import styled from 'styled-components'
import ThankYouForm from '../../components/ThankYouForm'
import ThankYouHero from '../../components/ThankYouHero'
import Header from '../../components/Header'
import { useTheme } from '../../utils/hooks'

const ThankYou = ({ env, history }) => {
  const { text, buttonText, image } = useTheme('thankYou')

  return (
    <React.Fragment>
      <Header />
      <ThankYouHero image={image} />
      <Wrapper>
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

const Text = styled.h2`
  font-size: 18px;
  font-weight: normal;
  text-align: left;
  color: #fff;
  width: 90%;
  margin-top: 30px;
  padding: 0;

  @media screen and (min-width: 600px) {
    margin-top: 50px;
    max-width: 450px;
  }
`

export default ThankYou
