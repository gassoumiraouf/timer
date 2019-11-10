import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {item}=this.props;
        return (<div className='timer'>
            <div className='timer-value'>
            <h1> {Math.round((item)/1000/3600) }</h1><br/>
            <h1>:</h1>
            <h1> {Math.round((item)/1000%3600/60) }</h1>
            <h1>:</h1>
            <h1> {Math.round((item)/1000%3600%60/60) }</h1>
            </div>
            <div className='timer-name'>
                <p>hours</p>
                <p>munites</p>
                <p>seconds</p>
            </div>
        </div> );
    }
}
 
export default Timer;