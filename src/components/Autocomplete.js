import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'
import { properties } from '../data/properties/courtyard'

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  if (inputLength === 0) return []

  const marshaTop5 = properties
    .filter(
      property => property.marsha.toLowerCase().slice(0, inputLength) === inputValue
    )
    .slice(0, 5)

  const propertyTop5 = properties
    .filter(
      property =>
        property.name
          .slice(0, property.name.indexOf(' ('))
          .toLowerCase()
          .indexOf(value.toLowerCase()) !== -1
    )
    .slice(0, 5)

  return [...new Set([...marshaTop5, ...propertyTop5])]
}

const getSuggestionValue = suggestion => suggestion.name

const renderSuggestion = suggestion => <div>{suggestion.name}</div>

export default class Autocomplete extends Component {
  state = {
    value: '',
    suggestions: []
  }

  onChange = (event, { newValue }) => {
    const found = Boolean(properties.find(property => property.name === newValue))
    this.setState({
      value: newValue
    })
    this.props.setValid(found)
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    })
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    })
  }

  onSuggestionSelected = event => {
    event.preventDefault()
  }

  render () {
    const { value, suggestions } = this.state
    const inputProps = {
      placeholder: 'Property Name or MARSHA...',
      value,
      onChange: this.onChange
    }

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        highlightFirstSuggestion
        focusInputOnSuggestionClick
      />
    )
  }
}
