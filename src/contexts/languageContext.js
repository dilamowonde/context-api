import React, { Component } from 'react'
import { createContext } from 'react';

export const LanguageContext = createContext()

export default class LanguageProvider extends Component {
  constructor(props){
    super(props)
    this.state = {
      language: "Hadyia"
    }
    this.changeLanguage = this.changeLanguage.bind(this)
  }

  changeLanguage(lang){
    this.setState({
      language: lang
    })
  }
  render() {
    return (
      <LanguageContext.Provider value={{...this.state,changeLanguage: this.changeLanguage}}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}
