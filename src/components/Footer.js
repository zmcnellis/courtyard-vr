import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../utils/hooks'

const Footer = () => {
  const { heading, linkName, linkUrl, subheading } = useTheme('footer')

  return (
    <Wrapper>
      <Message>
        {heading} <Link href={linkUrl}>{linkName}</Link>
      </Message>
      <Legal>{subheading}</Legal>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  text-align: center;
  padding: 30px 0;
`

const Message = styled.h2`
  font-weight: normal;
  color: ${props => props.theme.colors.primary};
  max-width: 300px;
  margin-top: 0;
  padding: 0;
`

const Link = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: inherit;
`

const Legal = styled.small`
  font-size: 12px;
  color: #fff;
`

export default Footer
