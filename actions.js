
export const SEARCH_KEY = 'SEARCH_KEY';
export const SEARCH_RESULT = 'SEARCH_RESULT';

//dispatch(searchKey(key))
//dispatch(searchResult(result))

import React from 'react'
import { render } from 'react-dom'
import elasticsearch from 'elasticsearch'
import Typeahead from './typeahead-react-component'
import cx from 'classnames';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

let client = new elasticsearch.Client({
    host: '10.140.10.116:9090',
    // log: 'trace'
})

const search_query = event.target.value
        client.search({
            query: search_query,
            output:"JSON"
        }).then(function ( body ) {
            if(body.success == true){
                dispatch(searchResult(body.results))
                for (var key in body.results) {
                  hint.push(body.results[key].name);
                }
                hint = hint.filter(function(n){ return n != undefined }); 
                hint = hint.slice(1,10)
                this.setState({ options: hint })
                this.setState({ results: body.results })
            }
        }.bind(this), function ( error ) {
            console.trace( error.message );
        });

export function searchKey(key) {
  return {
    type: SEARCH_KEY,
    key,
  };
}

export function searchResult(result) {
  return {
    type: SEARCH_RESULT,
    result,
  };
}