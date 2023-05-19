
import './App.css';
import React, { PureComponent, useState, memo } from 'react';

// Class-based component using PureComponent
class Counter extends PureComponent {
  render() {
    console.log('Counter rendered using Pure component');
    return <div>Counter: {this.props.count}</div>;
  }
}

// Functional component using memo
const Button = memo(({ onClick }) => {
  console.log('Button rendered using memo');
  return <button onClick={onClick}>Increment</button>;
});

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
    </div>
  );
}

export default App;
