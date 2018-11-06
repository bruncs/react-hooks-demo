import React, { Component, Fragment } from "react";
import * as locales from "./locales";
import * as themes from "./themes";
import LocaleContext from "./locales/context";
import ThemeContext from "./themes/context";
import Counter from "./components/Counter";

class App extends Component {
  state = {
    locale: locales.en,
    theme: themes.corporate
  };

  render() {
    const { locale, theme } = this.state;
    return (
      <div className="App">
        <LocaleContext.Provider value={locale}>
          <ThemeContext.Provider value={theme}>
            <LocaleContext.Consumer>
              {locale => (
                <ThemeContext.Consumer>
                  {theme => (
                    <Fragment>
                      <Counter context={{ locale: locale.Counter, theme }} />
                      <Counter context={{ locale: locale.Counter, theme }} />
                    </Fragment>
                  )}
                </ThemeContext.Consumer>
              )}
            </LocaleContext.Consumer>
          </ThemeContext.Provider>
        </LocaleContext.Provider>
      </div>
    );
  }
}

export default App;
