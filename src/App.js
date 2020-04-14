import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import './App.css';

const DEFAULT_NUM_RESULTS = 10;

const App = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numResults, setNumResults] = useState(DEFAULT_NUM_RESULTS);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [contentToShow, setContentToShow] = useState(null);

  //we use this ref to keep track of the last searched query, in case a previous async call took longer
  //now it wont override the correct results
  const latestQueryRef = useRef('');

  //use this to keep track of last valid number if user inputs an invalid number so we can fall back
  const lastNumRef = useRef(DEFAULT_NUM_RESULTS);

  const numInputRef = useRef(null);

  const queryOnChangeHandler = (event) => {
    const searchTerm = event.target.value;
    getSearchSuggestionsDebounced(searchTerm);
  };

  const getSearchSuggestions = async (searchTerm) => {
    latestQueryRef.current = searchTerm;
    const endpointUrl = `http://vertauiinterview3zcck5-env.c3jmih47du.us-east-1.elasticbeanstalk.com/search?count=${numResults}&prefix=${searchTerm}&randomDelay=true`;
    setIsLoading(true);
    const request = await fetch(endpointUrl);
    const data = await request.json();

    if (latestQueryRef.current === searchTerm) {
      setResults(data.results);
      setHighlightIndex(-1);
      setIsLoading(false);
    }
  };

  const [getSearchSuggestionsDebounced] = useDebouncedCallback(
    getSearchSuggestions,
    250
  );

  const numResultOnChangeHandler = (event) => {
    const value = event.target.value;
    setNumResults(value);
  };

  //we do some checks on blur to make sure value is valid (e.g. greater than 0, no 'e' strings, float to ints)
  const numResultOnBlurHandler = () => {
    const numResultsInt = parseInt(numResults, 10);

    if (isNaN(numResultsInt)) {
      setNumResults(lastNumRef.current);
    } else if (numResultsInt < 1) {
      setNumResults(1);
      lastNumRef.current = 1;
    } else {
      lastNumRef.current = numResultsInt;
      setNumResults(numResultsInt);
    }
  };

  const onKeyDownHandler = useCallback(
    (event) => {
      if (contentToShow === null) {
        //ignore up and down if focused on num input because those are valids controls
        if (event.target !== numInputRef.current) {
          if (event.key === 'ArrowDown') {
            setHighlightIndex((prevState) => {
              if (prevState < results.length - 1 && results.length > 0)
                return prevState + 1;
              else return 0;
            });
          }
          if (event.key === 'ArrowUp') {
            setHighlightIndex((prevState) => {
              if (prevState > 0) return prevState - 1;
              else return results.length - 1;
            });
          }
        }
        if (event.key === 'Enter') {
          if (results[highlightIndex]) getFileContent(results[highlightIndex]);
        }
      } else {
        if (event.key === 'Backspace') {
          setContentToShow(null);
        }
      }
    },
    [highlightIndex, results, contentToShow]
  );

  const getFileContent = async (filename) => {
    const endpointUrl = `http://vertauiinterview3zcck5-env.c3jmih47du.us-east-1.elasticbeanstalk.com/static/${filename}`;
    const request = await fetch(endpointUrl);
    const text = await request.text();
    setContentToShow(text);
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDownHandler);

    return () => {
      document.removeEventListener('keydown', onKeyDownHandler);
    };
  }, [onKeyDownHandler]);

  return (
    <div className='App'>
      <div>Verta Assignment</div>
      <div>
        search query:{' '}
        <input
          className='queryInput'
          onChange={queryOnChangeHandler}
          disabled={contentToShow !== null}
        />
      </div>
      <div>
        num results:
        <input
          min={1}
          disabled={contentToShow !== null}
          ref={numInputRef}
          className='numInput'
          type='number'
          value={numResults}
          onChange={numResultOnChangeHandler}
          onBlur={numResultOnBlurHandler}
        />
      </div>

      {isLoading && <div className='spinner' />}
      {!isLoading && results.length > 0 && (
        <div className='results'>
          <h1>Results:</h1>
          {results.map((result, i) => {
            return (
              <div
                key={result}
                className={i === highlightIndex ? 'highlight' : ''}
              >
                {result}
              </div>
            );
          })}
        </div>
      )}
      {!isLoading && results.length === 0 && 'no results'}
      {contentToShow && (
        <div className='contentDialog'>
          <button onClick={() => setContentToShow(null)}>Back</button>
          <div className='contentDialogContent'>{contentToShow}</div>
        </div>
      )}
    </div>
  );
};

export default App;
