import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const PageInfo = ({ text, canNavigateBack = false }) => {
  return (
    <React.Fragment>
      {canNavigateBack ? (
        <Wrapper as={Link} to='/'>
          <Arrow>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Arrow>
          <Text>{text}</Text>
        </Wrapper>
      ) : (
        <Wrapper>
          <Text>{text}</Text>
        </Wrapper>
      )}
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
  color: ${props => props.theme.colors.secondary};
  position: absolute;
  left: 5%;

  @media screen and (min-width: 1024px) {
    left: calc(50% - 200px);
  }

  font-size: 60px;
`

const Text = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-weight: normal;
  text-transform: uppercase;
  max-width: 450px;
`

export default PageInfo
