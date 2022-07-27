import React, { Component } from "react";

import { LanguageContext } from "./../contexts/languageContext";
import { ThemeContext } from "./../contexts/themeContext";

export default class login extends Component {
  static defaultProps = {
    language: {
      English: {
        username: "Username",
        password: "Password",
        register: "Register"
      },
      Amharic: {
        username: "ሙሉ ስም",
        password: "ሚስጥር ኩጥር",
        register: "ምዝገባ"
      },
      Hadyia: {
        username: "sum",
        password: "passorde",
        register: "mezegebeme",
      },
    },
  };

  static contextType = ThemeContext;
  render() {
    // console.log(this.props.language["Amharic"]["username"])
    const { isdark } = this.context;
    return (
      <LanguageContext.Consumer>
        {({ language, changeLanguage }) => (
          <div
            className={`transition ease-in-out delay-150 duration-1000 flex justify-center items-center h-full ${
              isdark ? "bg-black/40" : "bg-white"
            }`}
          >
            <div
              className={`transition ease-in-out delay-150 duration-1000 ${
                isdark ? "bg-gray-500" : "bg-gray-50"
              } flex flex-col p-5 space-x-3 space-y-8 bg-gray-200 shadow-xl rounded-md`}
            >
              <div className="felx space-y-3">
                <p className="text-xl font-bold">{this.props.language[language]["register"]}</p>
                <select
                  onChange={(e) => changeLanguage(e.target.value)}
                  value={language}
                  className="rounded-md text-base  p-1 capitalize font-medium  border-2 border-white focus:outline-none focus:border-spacing-2 focus:ring-cyan-400 focus:border-cyan-500"
                >
                  <option value="English">English</option>
                  <option value="Amharic">አማርኛ</option>
                  <option value="Hadyia">Hadiysa</option>
                </select>
              </div>
              <form
                action=""
                className="flex flex-col space-y-5 justify-center items-center"
              >
                <div>
                  <input
                    className="w-72 p-2 rounded-md border-2 border-white focus:outline-none focus:border-spacing-2 focus:ring-cyan-400 focus:border-cyan-500"
                    placeholder={this.props.language[language]["username"]}
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="w-72 p-2 rounded-md border-2 border-white focus:outline-none focus:border-spacing-2 focus:ring-cyan-400 focus:border-cyan-500"
                    placeholder={this.props.language[language]["password"]}
                    type="password"
                    name=""
                    id=""
                  />
                </div>
                <button
                  type="submit"
                  className={`${isdark?"bg-red-900":"bg-blue-500"} transition ease-in-out delay-150 duration-1000 w-full rounded-lg p-2 text-white text-base font-medium`}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}
