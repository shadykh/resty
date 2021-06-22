import React from 'react';
import './form.scss'

class Form extends React.Component {

  constructor(props) {

    super(props);
    this.state = {

      url: '',
      method: 'GET'

    };

  }

  handleChange = e => {
    let url = e.target.value;
    this.setState({ url });
  }

  handleSubmit = async e => {
    e.preventDefault();

    let raw = await fetch(this.state.url);
    console.log('-------------raw--------------------');
    console.log(raw);
    console.log('--------------raw-------------------');
    let data = await raw.json();
    //let count = data.count;

    console.log('-------------data--------------------');
    console.log(data);
    console.log('--------------data-------------------');
    //let results = data.results;
    this.props.handler(data);

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
          <label>
            URL:
            <input type="text" placeholder='Please enter the URL !!' required onChange={this.handleChange} />
          </label>
          <button id='button' type="submit"  > Go! </button>
          <div>
            <label for='GET'>GET</label>
            <input id='button' name='GET' type="radio" value="GET" checked onChange={this.handleButton} />
            <label for='POST'>POST</label>
            <input id='button' name='POST' type="radio" value="POST" onChange={this.handleButton} />
            <label for='PUT'>PUT</label>
            <input id='button' name='PUT' type="radio" value="PUT" onChange={this.handleButton} />
            <label for='DELETE'>GET</label>
            <input id='button' name='DELETE' type="radio" value="DELETE" onChange={this.handleButton} />
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