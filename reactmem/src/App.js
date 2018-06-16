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
        clicked: []
      };

      handleIncrement = () => {

        this.setState({ count: this.state.count + 1, flags: flags});
        let selection = document.getElementById("image")
        console.log(selection)
      };



  
    render() {
      return (
        <Wrapper>
            <Counter 
            count = {this.state.count}
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


  
  
