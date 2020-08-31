import React from 'react';
import PropTypes from "prop-types"


class App extends React.Component{
  // 생성자
  constructor(props) {
    super(props);
    console.log("hello")
  }

  // component가 처음 render될때 호출됨
  componentDidMount() {
    console.log("component render");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("did update")
  }

  state = {
    count: 0
  };
// setState- > state refresh -> render
  // 변화가 있는 부분만 업데이트
  add = () => {
    this.setState(
        current => ({
          count: current.count+1
        })
    )
  };
  minus = () => {
    this.setState(current => ({
      count: current.count-1
    }))
  };

  render(){
    console.log("I'm rendering")
    return (
        <div>
          <h1>The number is : {this.state.count}</h1>
          <button onClick={this.add}>Add</button>
          <button onClick={this.minus}>Minus</button>
        </div>
    )
  }
}

export default App;
