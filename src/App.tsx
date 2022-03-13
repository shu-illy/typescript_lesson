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

// Union Types
let value: boolean | number
value = true;
value = 10;

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, 3, "hello"];

let company: "Facebook" | "Google" | "Amazon"
company = "Amazon";

let memory: 256 | 512;
memory = 512

// typeof

let msg: string = "Hi";
let msg2: typeof msg = "hello";

let animal = { cat: "small cat" };
let newAnimal: typeof animal = {
  cat: "big cat",
}

// keyof
type KEYS = {
  primary: string;
  secondary: string;
}
let key: keyof KEYS
key = "primary";

// typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball"
};
let keySports: keyof typeof SPORTS;
keySports = "soccer";

// enum
enum OS {
  Windows,
  Mac,
  Linux,
}

interface PC {
  id: number,
  OSType: OS
}

const PC1: PC = {
  id: 1,
  OSType: OS.Windows
}

const PC2: PC = {
  id: 2,
  OSType: OS.Mac
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
