import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

export default class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isdark: true
    }
    this.toggletheme = this.toggletheme.bind(this)
  }

  toggletheme(){
    this.setState({
      isdark: !this.state.isdark
    })
  } 

  

  render() {
    return ( 
      <ThemeContext.Provider value={{...this.state, toggletheme:this.toggletheme}} >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
