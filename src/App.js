import React, { Component } from "react";
import Image from "./components/image";
import flags from "./flags.json";
import Wrapper from "./components/Wrapper";
import Counter from "./components/counter";
import "./App.css";


class App extends Component {

  state = {
    flags,
    count: 0,
    topScore: 0,
    clicked: [],
    url: flags.image
  };

  handleIncrement = (e, data) => {

    function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    }

    this.setState({ count: this.state.count + 1 });
    if (this.state.count >= this.state.topScore) {
      this.setState({ topScore: this.state.topScore + 1 });
    }
    console.log(e)
    shuffle(flags)
    for (var i = 0; i < this.state.clicked.length; i++) {
      if (this.state.clicked[i] === e) {
        this.setState({ clicked: [], count: 0 });
        console.log("taken")
        shuffle(flags)
      }
      else
        shuffle(flags)
      console.log("not taken")
      console.log(this.state.flags[e - 1].image)
      console.log(flags)

    }
    this.state.clicked.push(e)
  };

  render() {
    return (
      <Wrapper>
        <Counter
          count={this.state.count}
          topScore={this.state.topScore}
        />
        {this.state.flags.map(flag => (
          <Image
            increment={this.handleIncrement}
            key={flag.id}
            name={flag.name}
            image={flag.image}
            id={flag.id}
          />
        ))}
      </Wrapper>
    );
  }
}


export default App;




