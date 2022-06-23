import React from 'react'
import './ChartBar.css'
function ChartBar(props) {

  let h = '0%';
  if (props.maxHeight > 0) {
    h = Math.round(props.height / props.maxHeight * 100) + '%';
  }
 console.log(h);
  return (
    <div className='chart-bar'>
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: h }}>
        </div>
        <div className="chart-bar__label">
          {props.index}
        </div>
      </div>
    </div>
  )
}

export default ChartBar