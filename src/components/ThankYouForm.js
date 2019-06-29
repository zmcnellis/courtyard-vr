import React, { useState } from 'react'
import ReactGA from 'react-ga'
import styled from 'styled-components'
import Autocomplete from './Autocomplete'
import Button from './Button'
import Properties from '../data/properties'
import firebase from '../utils/firebase'

const ThankYouForm = ({ buttonText, env, history }) => {
  const [disabled, setDisabled] = useState(true)
  const [value, setValue] = useState({})
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const data = Properties[env]

  const setValid = valid => {
    setDisabled(!valid)
    if (error) setError('')
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (disabled) return

    setIsLoading(true)
    const { id, name } = value
    const db = firebase.firestore()
    const updated_at = firebase.firestore.Timestamp.now()
    db.doc(`welcome/${env}/properties/${id}`)
      .set({ name, updated_at })
      .then(() => {
        setIsLoading(false)
        history.push(`/${env}/thankyou/video`)
      })
      .catch(() => {
        setIsLoading(false)
        setError('Error. Please try again later.')
      })
  }

  const handleClick = () => {
    ReactGA.event({
      category: 'Thank You',
      action: 'Clicked Submit',
      label: 'Button'
    })
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Autocomplete setValid={setValid} setValue={setValue} data={data} />
      {!disabled && <Button disabled={isLoading} text={buttonText} handleClick={handleClick} />}
      {error && <Error>{error}</Error>}
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

const Error = styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  margin-top: 8px;
`

export default ThankYouForm
