import React, { Component, Fragment } from "react";
import * as themes from "./themes";
import ThemeContext from "./themes/context";
import Counter from "./components/Counter";

class App extends Component {
  state = {
    theme: themes.corporate
  };

  render() {
    return (
      <div className="App">
        <ThemeContext.Provider value={this.state}>
          <ThemeContext.Consumer>
            {context => (
              <Fragment>
                <Counter context={context} />
                <Counter context={context} />
              </Fragment>
            )}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
