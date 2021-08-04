import React from 'react';
import { useState } from 'react';
import styled from "styled-components";
import Number from './Number';

function App() {
  const [counter, setCounter] = useState<number>(0);

  const add = ():void => setCounter(counter + 1);

  return (
    <div className="App">
      <Number count={counter}/>
      <button onClick={add}>Add</button>
    </div>
  );
}

//// Class Component
// interface IState {
//   counter: number;
// }

// class App extends Component<{}, IState> {
//   state = {
//     counter: 0
//   };
//   render() {
//     const { counter } = this.state;
//     return (
//       <div>
//         {counter} <button onClick={this.add}>Add</button>
//       </div>
//     );
//   }
//   add = () => {
//     this.setState(prev => {
//       return {
//         counter: prev.counter + 1
//       };
//     });
//   };
// }      

export default App;
