import React from 'react';
import ReactJson from 'react-json-view';

const Results = (props) => {

    if(!props.Response.results){
        return (
            <section className="results">
                <p>⚠️There is no data here!⚠️</p>
                <p> You should enter URL!!</p>
            </section>
          )
    } else {
        return (
            <section className="results">
              <ul>
                <pre><ReactJson src={props} /></pre>
              </ul>
            </section>
          )
    }

}

export default Results;