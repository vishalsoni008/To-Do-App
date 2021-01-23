import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component{
     
constructor(){
    super();
    this.state={
        counter:0
    }
    //this.increment=this.increment.bind(this)  arrow function not need this
}

    render(){
    return (
        <div className="counter">
            <button onClick={this.increment}>+1</button>
            <button onClick={this.fiftyincrement}>+50</button>
            <button onClick={this.hundredincrement}>+100</button><br/>
            <button onClick={this.decrement}>-1</button>
            <button onClick={this.fiftydecrement}>-50</button>
            <button onClick={this.hundreddecrement}>-100</button><br/>

           
    <span className="count">{this.state.counter}</span><br/>
    <button onClick={this.reset}>reset</button>
        </div>
    );
}

 increment=()=>{
    //console.log('increment');
    //this.state.counter++;
    this.setState({
        counter:this.state.counter+1
    })
}
decrement=()=>{
    this.setState({
        counter:this.state.counter-1
    })
}
fiftydecrement=()=>{
    this.setState({
        counter:this.state.counter-50
    })
}
hundreddecrement=()=>{
    this.setState({
        counter:this.state.counter-100
    })
}
fiftyincrement=()=>{
    this.setState({
        counter:this.state.counter+50
    })
}
hundredincrement=()=>{
    this.setState({
        counter:this.state.counter+100
    })
}
reset=()=>{
    this.setState({
        
        // counter:this.state.counter=0
    })
}
}
export default Counter;