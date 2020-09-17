import React from 'react';
import { useSelector } from 'react-redux';

export default function CounterOutput() {
  const counter = useSelector((state) => state.counter);
  const name = useSelector((state) => state.name);
  const age = useSelector((state) => state.age);
  const obj = useSelector((state) => ({
    counter: state.counter,
    name: state.name,
    age: state.age,
  }));
  // obj.counter;
  // obj.name;
  // obj.age;
  return (
    <>
      Counter Value: {counter} <br /> name:{name} <br /> age:{age}
      Counter Object: {obj.counter} <br /> name:{obj.name} <br /> age:{obj.age}
    </>
  );
}
