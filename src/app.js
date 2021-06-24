import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Headers from './components/header/header.js';
import Form from './components/form/form.js';
import History from './components/history/history.js';
import Results from './components/results/results.js';
import Help from './components/help/help.js'
import Footer from './components/footer/footer.jsx';
import './app.scss'

class App extends React.Component {

  constructor(props) {

    super(props);
    this.state = {

      loaded: false,
      loading: false,
      count: 0,
      results: [],
      headers: "",
      history: [],
      url: '',
      method: ''

    }
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  handleForm = async (query) => {
    this.toggleLoading();
    const raw = await axios(query);
    const data = raw.data;
    const count = data.count;
    const headers = raw.headers;
    const results = data;
    const url = query.url;
    const method = query.method;
    this.setState({ url })
    this.setState({ method })
    this.setState({ headers, count, results });
    this.setState({ history: [...this.state.history, query] });
    this.setState({ loaded: true });

    this.toggleLoading();
  }

  handleHistory = async (query) => {
    console.log('query',query);
    await this.handleForm(query);
    this.setState({ history: this.state.history.splice(0, this.state.history.length - 1) });
  }


  render() {

    return (
      <BrowserRouter>
          <Headers />
          <Switch>
            <Route exact path="/">
              <Form prompt="Go!" toggleLoading={this.toggleLoading} handler={this.handleForm} />
              <div id='resultDiv'>
                <History history={this.state.history} handler={this.handleHistory} />
                <Results url={this.state.url} method={this.state.method} headers={this.state.headers} count={this.state.count} results={this.state.results} loading={this.state.loading} loaded={this.state.loaded} />
              </div>
            </Route>
            <Route path="/history">
              <History history={this.state.history} handler={this.handleHistory} />
              <Results results={this.state.results} loading={this.state.loading} loaded={this.state.loaded} />
            </Route>
            <Route path="/help">
              <Help />
            </Route>
          </Switch>
          <Footer />
      </BrowserRouter>
    );

  }


}

export default App;