import React from 'react';
import './form.scss'

class Form extends React.Component {

  constructor(props) {

    super(props);
    this.state = {

      url: '',
      method: 'GET',
      data:{}
    };

  }

  handleChange = e => {
    let url = e.target.value;
    console.log('url', url);
    this.setState({ url });
  }
  handleData = e => {
    let data = JSON.parse(e.target.value);
    console.log('data', data, typeof(data));
    this.setState({ data });
  }

  handleSubmit = async e => {
    e.preventDefault();

    let urlWithMethod = {
      url: this.state.url,
      method: this.state.method,
      data: this.state.data
    }

    this.props.handler(urlWithMethod);

  }

  handleButton = e => {
    e.preventDefault();
    let method = e.target.value
    this.setState({ method });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div id='url'><label id='labelId'>
            URL:
            <input  type="text" placeholder='Please enter the URL !!' required onChange={this.handleChange} />
          </label>
            <button id='goBtn'>{this.props.prompt}</button>
          </div>
          <div id='btnsDiv'>
            <button className={`method-${this.state.method === 'GET'}`} onClick={this.handleButton} value='GET'>GET</button>
            <button className={`method-${this.state.method === 'PUT'}`} onClick={this.handleButton} value='PUT'>PUT</button>
            <button className={`method-${this.state.method === 'POST'}`} onClick={this.handleButton} value='POST'>POST</button>
            <button className={`method-${this.state.method === 'DELETE'}`} onClick={this.handleButton} value='DELETE'>DELETE</button>
          </div>
          <div id='data'><label id='labelId'>
            Data:
            <input id='data' type="text" placeholder='If you want to use Put or Post, please fill data here!' onChange={this.handleData} />
          </label>
          </div>
        </form>

        {/* <div id='urlMethod'>
          <p>{this.state.method} &nbsp; &nbsp; &nbsp; {this.state.url} </p>
        </div> */}
      </div>
    );
  }
}
export default Form;