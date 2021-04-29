import logo from './logo.svg';
import './App.css';
import SwitchExample from './SwitchExample'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SwitchExample />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Here!
        </a>
      </header>
    </div>
  );
}

export default App;
