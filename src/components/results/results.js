import React from 'react';
import ReactJson from 'react-json-view';
import { If, Then, Else } from 'react-if';
import './results.scss'
const data = [];
const Results = (props) => {

  return (
    <section className="results">
      <If condition={props.loading}>
        <Then>
          <div className='loader'> <img id='img' src='https://www.freeiconspng.com/uploads/load-icon-png-10.png' alt="Logo" /></div>
        </Then>
        <Else>
          <If condition={props.loaded}>
            <Then>
              <ul>
                <pre><b>Count:</b> {props.count}</pre>
                <pre><b>Headers:</b> <ReactJson src={props.headers} /></pre>
                {console.log(props)}
                <pre><b>Body:</b> <ReactJson src={props.results} /></pre>
              </ul>
              {data.push({ url: props.url, method: props.method, body: props.results })}
              {window.localStorage.setItem('data', JSON.stringify(data))}
            </Then>
            <Else>
            </Else>
          </If>
        </Else>
      </If>
    </section >
  );
}

export default Results;