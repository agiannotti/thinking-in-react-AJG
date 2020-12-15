import React, { Component } from "react";
import Customize from "./Customize";
import Cart from "./Cart";
import Header from "./Header";
import FEATURES from "./FEATURES";
import "./App.css";

class App extends Component {
  state = {
    lists: FEATURES,
    selected: {
      Processor: {
        name: "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700,
      },
      "Operating System": {
        name: "Ubuntu Linux 16.04",
        cost: 200,
      },
      "Video Card": {
        name: "Toyota Corolla 1.5v",
        cost: 1150.98,
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500,
      },
    },
  };

  updateFeature = (feature, newValue) => {
    const newSelected = Object.assign({}, this.state.selected);
    newSelected[feature] = newValue;
    this.setState({
      lists: FEATURES,
      selected: newSelected,
    });
  };

  render() {
    const { lists, selected } = this.state;
    return (
      <div className="App">
        <Header />
        <main>
          <Customize
            featureList={lists}
            selected={selected}
            onItemChange={this.updateFeature}
          />
          <Cart selected={selected} />
        </main>
      </div>
    );
  }
}

export default App;
