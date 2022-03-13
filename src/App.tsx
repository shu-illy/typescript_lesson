import React from 'react';
import logo from './logo.svg';
import './App.css';

const name = "hello"

let username: string = "Hello"
let dummyNum = 2;

let array2 = [0, 2, "hello"]

interface NAME {
  first: string;
  last: string;
}

let nambeObj: NAME = {
  first: "Taro",
  last: "Yamada"
};

const func1 = (x: number, y: number): number => {
  return x + y;
}

// Intersection Types
type PROFILE = {
  age: number;
  city: string;
}

type LOGIN = {
  username: string;
  password: string;
}

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
