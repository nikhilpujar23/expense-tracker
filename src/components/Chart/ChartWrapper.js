import React from 'react'
import Chart from './Chart';

function ChartWrapper(props) {
  const data = [
    { index: 'Jan', height: 0 },
    { index: 'Feb', height: 0 },
    { index: 'Mar', height: 0 },
    { index: 'Apr', height: 0 },
    { index: 'May', height: 0 },
    { index: 'Jun', height: 0 },
    { index: 'Jul', height: 0 },
    { index: 'Aug', height: 0 },
    { index: 'Sep', height: 0 },
    { index: 'Oct', height: 0 },
    { index: 'Nov', height: 0 },
    { index: 'Dec', height: 0 },
  ]
  const expenses = props.expenses;
var maxHeight=0;
  for (var i of expenses) {
    const mnth = i.date.getMonth();
    data[mnth]['height'] = data[mnth]['height'] + i.amount;
    maxHeight = maxHeight+ i.amount;
  }

  return <Chart data={data} maxHeight={maxHeight}/>

}
export default ChartWrapper;
