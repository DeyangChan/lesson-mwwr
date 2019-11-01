import React from "react";
import Square from "./Square"

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nextMove: "O"
    }
  }

  render() {
    const changeSymbol = () => {
      if (this.state.nextMove === "O") {
        this.setState({ nextMove: "X"})
      } else {
        this.setState({ nextMove: "O"})
      }
    }

    return (
      <div style={
        {
          height: "150px",
          width: 150,
          borderStyle: "solid"
        }
      }>
      <div>
        <Square
          symbol={this.state.nextMove}
          changeSymbol={changeSymbol}
          />
        <Square
          symbol={this.state.nextMove} 
          changeSymbol={changeSymbol}/>
        <Square
          symbol={this.state.nextMove} 
          changeSymbol={changeSymbol}/>
      </div>
      <div>
        <Square
          symbol={this.state.nextMove} 
          changeSymbol={changeSymbol}/>
        <Square
          symbol={this.state.nextMove} 
          changeSymbol={changeSymbol}/>
        <Square
          symbol={this.state.nextMove} 
          changeSymbol={changeSymbol}/>
      </div>
      <div>
        <Square
          symbol={this.state.nextMove} 
          changeSymbol={changeSymbol}/>
        <Square
          symbol={this.state.nextMove} 
          changeSymbol={changeSymbol}/>
        <Square
          symbol={this.state.nextMove} 
          changeSymbol={changeSymbol}/>
      </div>
    </div>
    )
  }
}

export default Board;
