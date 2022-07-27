import React, { Component } from "react";

import { LanguageContext } from "./../contexts/languageContext";
import { ThemeContext } from "./../contexts/themeContext";

class Nav extends Component {
  static contextType = ThemeContext;

  static defaultProps = {
    language: {
      English: {
        flag: "🚩",
        search: "Search",
      },
      Amharic: {
        flag: "🏁",
        search: "ፈልግ",
      },
      Hadyia: {
        flag: "🎌",
        search: "hase",
      },
    },
  };
  render() {
    const { isdark, toggletheme } = this.context;
    return (
      <LanguageContext.Consumer>
        {({ language }) => (
          <nav
            className={`transition ease-in-out delay-150 duration-1000 flex justify-between px-24 py-2 items-center text-white  ${
              isdark ? "bg-gray-500" : "bg-blue-500"
            }`}
          >
            <div className="flex space-x-4">
              <p>App title {this.props.language[language]["flag"]}</p>
              <input
                onChange={toggletheme}
                className=" border-2 border-white focus:outline-cyan-600 focus:border-spacing-2 focus:ring-cyan-400 focus:border-cyan-500"
                type="checkbox"
                name="theme"
              />
            </div>
            <div>
              <div>
                <input
                  className="p-2 rounded-lg  border-2 border-white focus:outline-none focus:border-spacing-2 focus:ring-cyan-400 focus:border-cyan-500"
                  placeholder={this.props.language[language]["search"]}
                  type="text"
                  name="search"
                />
              </div>
            </div>
          </nav>
        )}
      </LanguageContext.Consumer>
    );
  }
}

export default Nav;
