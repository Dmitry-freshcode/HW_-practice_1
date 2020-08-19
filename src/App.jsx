import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Greeting from './components/Greeting';
import UserList from './components/UserList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'unknown',
      isHellomode: false,
    };
  }

  changeMode = () => {
    const { isHellomode } = this.state;
    this.setState({
      isHellomode: !isHellomode,
    });
  };
  render() {
    const { userName, isHellomode } = this.state;
    return (
      <>
        <button onClick={this.changeMode}>Mode</button>
        <Greeting name={userName} isHello={isHellomode} />
        <UserList />
      </>
    );
  }
}

// function App() {
//   return <Hello name="Vasya" />;
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
