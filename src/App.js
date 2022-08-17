import React, { Component } from 'react';

import './App.css';
import {infixToPostfix, evaluatePostfix} from "./Solve";

let nums = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "(", "0", ")",];
let operands = ['+', '-', '*', '/'];

class App extends Component {
  constructor(){
    super();
    this.state = {
      expr: "",
      value:""
    }

    this.handleNumClick = this.handleNumClick.bind(this);
    this.getResult = this.getResult.bind(this);
  }

  handleNumClick(e){
    let st = this.state.expr + e.target.innerText;
    this.setState({expr: st});
  }

  getResult(e){
    let val = console.log(evaluatePostfix(infixToPostfix(this.state.expr)));
    console.log(val);
    this.setState({expr: evaluatePostfix(infixToPostfix(this.state.expr))});
  }

  render(){
    return (
      <div className="App">
        <div className='screen'>{this.state.expr}</div>
        <div className="Nums">
          {
            nums.map(n => <div value={n} onClick={this.handleNumClick} className='num' key={n}>{n}</div>)
          }
        </div>
        <div className='Operands'>
          {
            operands.map((op,i) => <div onClick={this.handleNumClick} className='op' key={i}>{op}</div>)
          }
        </div>
        <div className='specials'>
          <div>&nbsp;</div>
          <div className='clear'>AC</div>
          <div className='delete'>{"<--"}</div>
          <div onClick={this.getResult} className='equals'>=</div>
        </div>
        
      </div>
    );
  }
}

export default App;
