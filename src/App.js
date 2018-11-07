import React, { Component, Fragment } from "react";

import * as locales from "./locales";
import * as themes from "./themes";
import LocaleContext from "./locales/context";
import ThemeContext from "./themes/context";
import GlobalStyle from "./styles/global";

import Dropdown from "./components/Dropdown";
import Counter from "./components/Counter";

class App extends Component {
  state = {
    locale: locales.ptbr,
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
                      <GlobalStyle background={theme.background} />
                      <Dropdown
                        context={{ locale: locale.Dropdown, theme }}
                        label={locale.Dropdown.label.locale}
                        options={{ ...locales }}
                      />
                      <Dropdown
                        context={{ locale: locale.Dropdown, theme }}
                        label={locale.Dropdown.label.theme}
                        options={{ ...themes }}
                      />
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
