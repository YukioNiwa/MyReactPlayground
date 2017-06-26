import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render(){
    var btnstyle = {
      color: 'red',
      backgroundColor: 'blue',
    };

    // http://qiita.com/koba04/items/0e81a04262e1158dbbe4
    return(
      <div>
        <span>{this.state.count}</span>
        <button onClick={this.handleClick.bind(this)}
          style={btnstyle}>+</button>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
