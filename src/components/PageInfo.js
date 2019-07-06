import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const PageInfo = ({ name, env }) => {
  return (
    <React.Fragment>
      <Wrapper as={Link} to={`/${env}`}>
        <Arrow>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Arrow>
        <Text>{name}</Text>
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
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  text-align: center;
  padding: 20px 0;
`

const Arrow = styled.span`
  color: ${props => props.theme.colors.arrowLarge};
  position: absolute;
  left: 5%;

  @media screen and (min-width: 1024px) {
    left: calc(50% - 240px);
  }

  font-size: 60px;
`

const Text = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-weight: normal;
  font-size: 32px;
  text-transform: uppercase;
  width: calc(90% - 80px);

  ${props => props.theme.env === 'shs' && `
    font-size: 28px;
  `}

  @media screen and (min-width: 600px) {
    max-width: 430px;
  }
`

export default PageInfo
