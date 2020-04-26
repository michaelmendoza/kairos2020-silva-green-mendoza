import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

function DataRow(props) {
  const { scoreIndex, setScoreIndex} = useContext(AppContext);
  const handleScoreIndex = () => {
    setScoreIndex(props.data.index);
  }
  
  return (
    <tr className={scoreIndex == props.index ? "active" : ""} >
      <th>{props.data.name}</th>
      <th>{props.data.status}</th>
      <th>{props.data.min}</th>
      <th>{props.data.max}</th>
      <th>{props.data.mean}</th>
      <th>{props.data.stdev}</th>
      <th>{props.data.var}</th>
      <th>{props.data.count}</th>
      <th><button onClick={handleScoreIndex}> show </button></th>
    </tr>
  )
}

function DataTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>Source</td>
          <td>Research</td>
          <td>Min</td>
          <td>Max</td>
          <td>Mean</td>
          <td>Std Deviation</td>
          <td>Variance</td>
          <td>Count</td>
          <td>Plot</td>
        </tr>
      </thead>
      <tbody>
        {
          props.data.map( (d,i) => <DataRow data={d} index={i} key={i}></DataRow> )
        }
      </tbody>
    </table>
  )
}

export default DataTable;