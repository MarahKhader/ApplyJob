//import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Signup from './Signup'
//<div id="app"> </div>

class Header extends React.Component {
  render() {
    return (
      <header ClassName="Header"> Header <br/> <br/> <br/></header>
    )
  }
}

const divStyle = {
   color: 'rgb(112, 4, 4)',
   margin: '50px',
   fontSize: '50px',
   fontFamily: "Bitstream Vera Sans Bold", fontStyle: 'italic', fontVariant: 'normal', fontWeight: '700', lineHeight: '44px'
};
class Content extends React.Component {
  render() {
    return (
      <main ClassName="Content">
       <Signup /> 
      </main>
    )
  }
}

class Footer extends React.Component {
  render() {
    return(
      <footer ClassName="Footer"> Footer </footer>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}



//ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
