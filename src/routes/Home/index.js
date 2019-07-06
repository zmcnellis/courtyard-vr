import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PageLink from '../../components/PageLink'
import Hero from '../../components/Hero'
import { useTheme } from '../../utils/hooks'

const Home = ({ env }) => {
  const { heading, subheading, image } = useTheme('home')
  const locations = useTheme('locations')

  return (
    <React.Fragment>
      <Header />
      <Hero image={image} />
      <Wrapper>
        <Heading fullWidth>{heading}</Heading>
        <Subheading>{subheading}</Subheading>
      </Wrapper>
      {locations.map(location => (
        <PageLink
          key={location.id}
          text={location.name}
          path={`/${env}/location/${location.id}`}
        />
      ))}
      <Footer />
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
  padding: 20px 0;
`

const Heading = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-weight: normal;
  font-size: 32px;
  text-transform: uppercase;
  width: 90%;

  ${props => props.theme.env === 'shs' && `
    font-size: 28px;
  `}

  @media screen and (min-width: 550px) {
    max-width: 430px;
  }
`

const Subheading = styled.p`
  font-size: 18px;
  font-weight: normal;
  text-align: center;
  color: #fff;
  margin-top: 0;
  padding: 0;
`

export default Home
