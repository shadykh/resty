import React from 'react';
import './form.scss'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleChange(event) {
    let url = event.target.value ;
    this.setState({ url });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleButton(event) {
    let method = event.target.value
    this.setState({ method});
  }

  render() {
    return (
      <div>
        <form >
          <label>
            URL:
            <input type="text" placeholder='Please enter the URL !!' required onChange={this.handleChange} />
          </label>
          <button type="submit" value="Submit" onClick={this.handleSubmit} > Submit </button>
          <div>
          <input type="button" value="GET" onClick={this.handleButton} />
          <input type="button" value="POST" onClick={this.handleButton} />
          <input type="button" value="PUT" onClick={this.handleButton} />
          <input type="button" value="DELETE" onClick={this.handleButton} />
          </div>
        </form>

        <div id='urlMethod'>
          <p>{this.state.method} &nbsp; &nbsp; &nbsp; {this.state.url} </p>
        </div>
      </div>
    );
  }
}
export default Form;