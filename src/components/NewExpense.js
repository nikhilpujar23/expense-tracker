import React from 'react'
import {useState} from 'react'
function NewExpense(props) {
    const [curinfo, setcurinfo] = useState({
        curtitle:'',
        curdate:'',
        curamount:''
    });
    const titlehandle = (event) => {
        setcurinfo((prevState)=>{
            return{
            ...prevState,
            curtitle:event.target.value
            }
        });
      
    };
    const datehandle = (event) => {
        setcurinfo((prevState)=>{
            return{

            ...prevState,
            curdate:event.target.value
            }
        });
      
    };
    const [toggleButton, setToggleButton] = useState('button');
    const onSetButton=()=>{
        setToggleButton((prevState)=>{
            return(
               'not button'
               )
                }
            )
        }
     const onCloseButton=()=>{
        setToggleButton((prevState)=>{
            return(
               'button'
               )
                }
            )
        }
    const amounthandle = (event) => {
        setcurinfo((prevState)=>{
            return{

            ...prevState,
            curamount:event.target.value
            }
        });
      
    };

    const retobj=(event)=>{
        event.preventDefault();

// console.log(curinfo.curamount,curinfo.curtitle,curinfo.curdate)
const enteredData={
    amount:curinfo.curamount,
    title:curinfo.curtitle,
    date:new Date(curinfo.curdate)
}
props.onSaveExpense(enteredData);
setcurinfo((prevState)=>{
return{
curamount:'',
curtitle:'',
curdate:''
}
}

)
    };
    if(toggleButton==='button'){
return(
    <div className='flex justify-center my-5'>

    <button className="bg-[#023047] hover:bg-[#105273] text-[#ffb703]  py-2 px-4 rounded-full" onClick={onSetButton}>
  Add New Expenses
</button>
    </div>
)
    }
    else
    {return (
        <div className='w-1/3  mx-auto my-2 '>
             <button type="button" className="bg-white rounded-md p-2 m-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 relative right-8 top-5" onClick={onCloseButton}>
              <span className="sr-only">Close menu</span>
             
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <form className='flex flex-col bg-[#26c0e6]' onSubmit={retobj}>

                <div className=' border-2 border-black flex  '>
                    <label className='basis-1/4 text-center p-1 text-lg font-bold border-2'>Title</label>
                    <input type='text' value={curinfo.curtitle}className='basis-3/4 border-2' onChange={titlehandle} />
                </div>
                <div className=' border-2 border-black flex  '>
                    <label className='basis-1/4 text-center p-1 text-lg font-bold border-2'>Date</label>
                    <input type='date' min='2020-01-01' max='2022-12-31' className='basis-3/4' value={curinfo.curdate} onChange={datehandle} />
                </div>
                <div className=' border-2 border-black flex  '>
                    <label className='basis-1/4 text-center p-1 text-lg font-bold border-2'>Amount</label>
                    <input type='number' min='1' className='basis-3/4' value={curinfo.curamount} onChange={amounthandle} />
                </div>
                <div className='flex justify-center bg-[#ffb703] p-2'>

                    <button type='submit' className='basis-[0.6] bg-[#26c0e6]  text-gray-800 font-semibold hover:font-bold py-2 px-4 border border-gray-400 rounded shadow'>Add Expense Item</button>
                </div>
            </form>
           
        </div>
    )
}
}
export default NewExpense