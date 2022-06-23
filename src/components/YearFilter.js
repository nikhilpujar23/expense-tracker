import React,{useState} from 'react'

function YearFilter(props) {
    
    const selecthandle=(event)=>{
     
      
       props.whichselected(event.target.value);
       
       
    }
  return (
    <div className='bg-[#26c0e6] w-1/6 flex justify-between mx-auto my-5 font-semibold  border border-gray-400 rounded shadow'>
        <label className='p-2 mx-auto'>Filter by year</label>
        <select value={props.default}onChange={selecthandle} >
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option calue='2020'>2020</option>
        </select>
    </div>
  )
}

export default YearFilter