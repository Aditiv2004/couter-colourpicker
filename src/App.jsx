import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColourPicker from './ColourPicker';


function App() {
  const [count, changecount] = useState(0);

  function increment(){

    if( count<20){
      changecount(count+1);
    }
  }

  
  function decrement(){

    if( count>0){
      changecount(count-1);
    }
  }
 
  const [Name,setName] = useState('');
    const [Role,setRole] = useState('');
    const [Age,setAge] = useState(0);
  return (
    <>
    <div className='big'>
      <div className="container">
      <h1>{count}</h1>
        <button onClick={increment}>
          increment  
        </button>
       
        <button onClick={decrement}>
          decrement  
        </button>
<br />
</div>
        <div className='container'>
         
         <input type="text" value={Name} onChange={(e)=>setName(e.target.value) }/> <br />
         <input type="text" value={Role} onChange={(e)=>setRole(e.target.value) }/> <br />
         <input type="text" value={Age} onChange={(e)=>setAge(e.target.value) }/> <br />

         <h2>Name:{Name}</h2>
         <h2>Designation: {Role}</h2>
         <h2> Age:{Age}</h2>
    </div>
      
    </div>
    <ColourPicker counter ={count}/>
    </>
  )
}

export default App
