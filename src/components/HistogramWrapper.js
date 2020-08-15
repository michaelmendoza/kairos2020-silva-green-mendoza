import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import HistogramChart from './HistogramChart';
import csv from '../data/scores.js';
import { readString } from 'react-papaparse'

const getScoreData= () => {
    var config = { delimiter:",", dynamicTyping: true}
    var results = readString(csv, config) // Read csv
    var data = results.data.splice(1, results.data.length - 1); // Remove headers
  
    var scores = []
    for(let i = 0; i < 10; i++) {
      scores[i] = data.map( (d)=> { return d[i]; })
    }
    
    return scores;
  }

const HistogramWrapper = () => {
    const { scoreIndex } = useContext(AppContext);

    return (
        <HistogramChart path="histogram" data={getScoreData()[scoreIndex]}></HistogramChart>
    )
  }

export default HistogramWrapper;