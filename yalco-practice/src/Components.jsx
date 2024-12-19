import React, { Component } from "react";

class ClassComp extends Component {
  render() {
    return <p>Class Component</p>;
  }
}

function FunctionComp() {
  return <p>Function Component</p>;
}

const ArrowFunctionComp = () => {
  return <p>Arrow Function Component</p>;
}

export { ClassComp, FunctionComp, ArrowFunctionComp };
