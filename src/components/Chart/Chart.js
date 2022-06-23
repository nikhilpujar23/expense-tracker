import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css';
function Chart(props) {

  return (
    <div className='chart'>
{props.data.map(datapoint=> <ChartBar
 height={datapoint.height} 
 maxHeight={props.maxHeight} 
 index={datapoint.index}
 key={datapoint.index}
 />)
 }
    </div>
  )
}

export default Chart