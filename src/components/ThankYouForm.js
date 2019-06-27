import React, { useState } from 'react'
import styled from 'styled-components'
import Autocomplete from './Autocomplete'
import Button from './Button'

const ThankYouForm = ({ buttonText, env, history }) => {
  const [disabled, setDisabled] = useState(true)

  const setValid = valid => {
    setDisabled(!valid)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!disabled) {
      history.push(`/${env}/thankyou/video`)
    }
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Autocomplete setValid={setValid} />
      {!disabled && (
        <Button disabled={disabled} text={buttonText} />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.form`
  margin: 18px 0;
  width: 90%;

  @media screen and (min-width: 600px) {
    max-width: 450px;
  }
`

export default ThankYouForm
