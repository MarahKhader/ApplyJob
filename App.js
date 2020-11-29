//import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Signup from './Signup'
//<div id="app"> </div>

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup/>
      </div>
    );
  }
}



//ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
