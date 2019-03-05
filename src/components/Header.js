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

const Arrow = styled.span`
  color: ${props => props.theme.colors.secondary}
  position: absolute;
  left: 5%;
  cursor: pointer;

  font-size: 40px;
`

const Wrapper = styled.div`
  height: 85px;
  background-color: ${props => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.4);
`

const Image = styled.img`
  width: 200px;

  @media screen and (min-width: 400px) {
    background-image: url(${props => props.image});
    width: 250px;
  }
`

export default withRouter(Header)
