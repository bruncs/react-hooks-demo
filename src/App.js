import React, { Component } from "react";
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
          <ThemeContext.Consumer>{theme => <Counter />}</ThemeContext.Consumer>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
