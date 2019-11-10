// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import Timer from './timer'
const timing= {time:'1000000'};

// function App() {

//   return (
//     <div className="App">
//      <Timer item={timing}/>
//     </div>
//   );
// }

// export default App;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timing:'60000'
      }
  }
  render() { 
    return (  <div className="App">
         <Timer item={this.state.timing}/>
         </div>);
  }
}
 
export default App;
