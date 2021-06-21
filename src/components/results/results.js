import React from 'react';
import {highlight} from 'cli-highlight';

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
                <pre>{highlight(JSON.stringify(props, null, 4))}</pre>
              </ul>
            </section>
          )
    }

}

export default Results;