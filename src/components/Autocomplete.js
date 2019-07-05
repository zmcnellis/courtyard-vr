import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'

const getSuggestionValue = suggestion => suggestion.name

const renderSuggestion = suggestion => <div>{suggestion.name}</div>

const onSuggestionSelected = event => event.preventDefault()

export default class Autocomplete extends Component {
  state = {
    value: '',
    suggestions: []
  }

  getSuggestions = value => {
    const data = this.props.data
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    if (inputLength === 0) return []

    const marshaTop5 = data
      .filter(
        property =>
          property.marsha.toLowerCase().slice(0, inputLength) === inputValue
      )
      .slice(0, 5)

    const propertyTop5 = data
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

  onChange = (event, { newValue }) => {
    const property = this.props.data.find(
      property => property.name === newValue
    )
    const found = Boolean(property)

    this.setState({
      value: newValue
    })
    this.props.setValid(found)

    if (found) {
      this.props.setValue(property)
    }
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    })
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    })
  }

  render () {
    const { value, suggestions } = this.state
    const inputProps = {
      placeholder: 'Search by location or MARSHA',
      value,
      onChange: this.onChange
    }

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        highlightFirstSuggestion
        focusInputOnSuggestionClick
      />
    )
  }
}
