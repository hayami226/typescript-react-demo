import React from 'react';
import { useState } from 'react';
import styled from "styled-components";
import { Form, Input } from './Input';
import Number from './Number';

function App() {
  const [counter, setCounter] = useState<number>(0);
  const [value, setValue] = useState<string>("");

  const add = ():void => setCounter(counter + 1);

  const onFormSubmit = (event: React.FormEvent):void => {
    event.preventDefault();
  }

  const onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target);
    setValue(event.currentTarget.value);
  }

  return (
    <div className="App">
      <Form onFormSubmit={onFormSubmit}>
        <Input value={value} onChange={onChange}/>
      </Form>
      <Number count={counter}/>
      <button onClick={add}>Add</button>
    </div>
  );
}

//// Class Component
// interface IState {
//   counter: number;
//   name: string;
// }

// class App extends Component<{}, IState> {
//   state = {
//     counter: 0,
//     name: ""
//   };
//   render() {
//     const { counter, name } = this.state;
//     return (
//       <div>
//          <Form onFormSubmit={this.onFormSubmit}>
//          <Input value={name} onChange={this.onChange} />
//          </Form>
//          <Number count={counter} /> <button onClick={this.add}>Add</button>
//       </div>
//     );
//   }
//
//    onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
//      console.log(event.target);
//    };
//
//    onFormSubmit = (event: React.FormEvent) => {
//    event.preventDefault();
//    };
//
//   add = () => {
//     this.setState(prev => {
//       return {
//         counter: prev.counter + 1
//       };
//     });
//   };
// }      

export default App;
