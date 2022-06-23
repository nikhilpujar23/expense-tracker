import React from 'react'
import Eitem from './Eitem';
import Card from './Card';
import YearFilter from './YearFilter';
import NewExpense from './NewExpense';
import { useState } from 'react';
import ChartWrapper from './Chart/ChartWrapper';

function Expenses(props) {

  const [expenses, setExpenses] = useState(props.expenses);
  const [curSelect, setCurSelect] = useState('2022');
  const filteredExpenses =expenses.filter(expense => expense.date.getFullYear().toString() === curSelect);
 let contentExpenses = <p className='text-lg text-center font-bold' >No Expenses found</p>;
  if (filteredExpenses.length> 0) {
    contentExpenses = filteredExpenses.map(expense => <Eitem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />);
  }
  const extractdata = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString()
    }
    setExpenses((prevState) => {
      return [expenseData, ...prevState];
    });
  };
  const filteringyr = (curyr) => {
    setCurSelect((prevState) => {
      return curyr;
    });
  }

          
        
  return (

    <Card >
      <div>
        <YearFilter default={curSelect} whichselected={filteringyr} />
        <ChartWrapper expenses={filteredExpenses}/>
      </div>
      <div className=' shadow-lg border-4 border-black shadow-black  w-1/2 flex flex-col mx-auto py-6 px-0 rounded-2xl bg-[#26c0e6]'>
        {contentExpenses}
        
      </div>


      <NewExpense onSaveExpense={extractdata} />
    </Card>

  )
}

export default Expenses