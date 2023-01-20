import * as React from 'react';
import './style.css';
import Navbar from './Navbar';
import Addemployee from './Addemployee';
import Employeedata from './Employeedata';

export default function App() {
  const [tableIsDisplay,setTableIsDisplay] = React.useState(true);
  const formDisplay = () =>{
    setTableIsDisplay(false);
  }
const backbuttonClick = ()=>{
  setTableIsDisplay(true);
}
const submitButtonClick = () =>{
  setTableIsDisplay(true);
}
  return (
   <div>
      <Navbar/>
      {tableIsDisplay?<Employeedata formDisplay={formDisplay}/>: <Addemployee backbuttonClick={backbuttonClick} submitButtonClick={submitButtonClick}/>}
    
     
    </div>
  );
}
