import React from 'react';
import Header from './components/header/header.js';
import Form from './components/form/form.js';
import Results from './components/results/results.js';
import Footer from './components/footer/footer.jsx';

class App extends React.Component {

  constructor(props) {

    super(props);
    this.state = {

      Headers: {'Content-Type': 'application/json'},
      Response: {},

    }
  }

  handleForm = (data) => {
    let Response = data;
    this.setState({Response});
  }

  render(){

    return (

      <>
        <Header />
        <Form  handler={this.handleForm} />
        <Results Headers={this.state.Headers}  Response={this.state.Response} />
        <Footer />
      </>
    );

  }


}

export default App;