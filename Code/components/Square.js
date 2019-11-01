import React from "react";

class Square extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      value: ""
    }
  }

  render() {
    return (
      <button
        style={{
          height: 50,
          width: 50,
          fontSize: 30,
          verticalAlign: "top"
        }}

        onClick={() => {
          this.setState({ value: this.props.symbol});
          this.props.changeSymbol();
        }}
      >{this.state.value}</button>
    )
  }
}

export default Square;
