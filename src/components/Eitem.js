
// function Eitem(){
//     return 
    
//     <div className="display-flex">
// <div>Date</div>
//     <h1>Title</h1>
//     <div>Amuont</div>
//     </div>
// }



export default function Eitem(props) {
    
  return (
   
      <h1 className=" text-lg bg-[#023047] flex flex-row m-2  rounded-lg skew-x-2 w-4/5 mx-auto">
        <div className="text-white basis-1/4 p-2 text-center"> {props.date.toLocaleString('en-in',{dateStyle:"medium"})}</div>
        <div className=" text-yellow-400 basis-1/2 p-2 text-center">{props.title}</div>
        <div className=" text-white basis-1/4 p-2 text-center">Rs. {props.amount} </div>
      </h1>

  
  )
}


