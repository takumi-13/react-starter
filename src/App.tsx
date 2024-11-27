import { useState } from 'react';
import './App.css';
import Test1 from './components/Test1';
import Test2 from './components/Test2';

function App() {
  const [count, setCount] = useState(0);
  const [msgTest1] = useState('This is Test1');
  const [msgTest2] = useState('This is Test2');
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Test1 count={count} msg={msgTest1} setCount={setCount} />
        <Test2 msg={msgTest2} />
      </div>
    </>
  );
}

export default App;
