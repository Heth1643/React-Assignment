import * as React from 'react';
import './style.css';
import Navbar from './Navbar';
import Addemployee from './Addemployee';
import Employeedata from './Employeedata';

export default function App() {
  return (
   <>
      <Navbar/>
     <Addemployee/>
     <Employeedata/>
    </>
  );
}
