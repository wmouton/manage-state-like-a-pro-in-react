import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

function App({initialCount}) {

    const [count, setCount] = useState(initialCount);
    
    const incrementCount = () => {
      setCount(currCount => currCount + 1);
    }
    
    const decrementCount = () => {
      setCount(currCount => currCount - 1);
    }
    
    useEffect(() => {
      console.log(count);
    }, [count])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p>Manage State Like A Pro With A Simple Counter</p>
          <div>
            <button onClick={decrementCount}>-</button>
            {count}
            <button onClick={incrementCount}>+</button>
          </div>
      </header>
    </div>
  );
}

App.propTypes = {
  initialCount: PropTypes.number
}

export default App;
