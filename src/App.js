
import './App.css';
import Expenses from './components/Expenses';

function App() {
const expenses=[
   
    {
      id:"e2",
      date:new Date(2022,1,1),
      title:"Clothes",
      amount:9000
    },
    {
      id:"e3",
      date:new Date(2022,1,1),
      title:"Clothes",
      amount:9000
    }
  ]
  return (
    <div  >
    <Expenses expenses={expenses}/>
   
    </div>
  );
}

export default App;
