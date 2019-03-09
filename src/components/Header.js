import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom'
import { useTheme } from '../utils/hooks'

const Header = ({ history, canNavigateBack = false }) => {
  const { logo } = useTheme('brand')
  return (
    <Wrapper>
      {canNavigateBack && (
        <Arrow onClick={() => history.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Arrow>
      )}
      <Image src={logo} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 75px;
  background-color: ${props => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid yellow; */
`

const Arrow = styled.span`
  color: ${props => props.theme.colors.secondary}
  /* border: 1px solid blue; */
  position: absolute;
  cursor: pointer;
  font-size: 40px;
  left: 25px;

  @media screen and (min-width: 1024px) {
    left: calc(50% - 200px);
  }
`

const Image = styled.img`
  width: 200px;
  /* border: 1px solid red; */

  @media screen and (min-width: 400px) {
    background-image: url(${props => props.image});
    width: 250px;
  }
`

export default withRouter(Header)
