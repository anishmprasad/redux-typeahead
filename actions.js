
export const SEARCH_KEY = 'SEARCH_KEY';
export const SEARCH_RESULT = 'SEARCH_RESULT';
export const SEARCH_HINTS = 'SEARCH_HINTS';

import React from 'react'
import elasticsearch from 'elasticsearch'
import PropTypes from 'prop-types';

export function elastic(search_query){
     return function (dispatch) {
        let client = new elasticsearch.Client({
            host: '10.140.10.116:9090',
            //log: 'trace'
        })

        client.search({
            query: search_query,
            output:"JSON"
        }).then(function ( body ) {
            debugger;
            if(body.success == true){
                
                for (var key in body.results) {
                  hint.push(body.results[key].name);
                }
                hint = hint.filter(function(n){ return n != undefined }); 
                hint = hint.slice(1,10)
                dispatch(searchHints(hint))
                dispatch(searchResult(body.results))
                dispatch(searchKey(search_query))
//                this.setState({ options: hint })
//                this.setState({ results: body.results })
            }
        }.bind(this), function ( error ) {
            console.trace( error.message );
        });
    }

}


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
export function searchHints(hint) {
  return {
    type: SEARCH_HINTS,
    hint,
  };
}