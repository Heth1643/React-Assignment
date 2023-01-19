import * as React from 'react';
import './style.css';


export default function Employeedata()
 {
  
  
   const data=[
    {firstname:"Hetul",
     lastname:"thakor",
     email:"hetul@gmail.com",
     phone:9601582103,
     gender:"Male",
     Department:".NET",
     Skiils:"Backend Developer"
  },
  {firstname:"Hetul",
  lastname:"thakor",
  email:"hetul@gmail.com",
  phone:9601582103,
  gender:"Male",
  Department:".NET",
  Skiils:"Backend Developer"
},
{firstname:"Hetul",
lastname:"thakor",
email:"hetul@gmail.com",
phone:9601582103,
gender:"Male",
Department:".NET",
Skiils:"Backend Developer"
}
  ];


  function btnaddemp() {}
 
  function btnedit(){}
  function btndelete(){}
    function btnPrev(){}
    function btnNext(){}

  
  return (
    
    <>
      <div className="main" id="main">
        <button onClick={btnaddemp} type="button" id="btnadd">
          Add Employee
        </button>
        <table>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Skills</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td>
                <button
                  type="button"
                  name="btnedit"
                  className="btnedit"
                  onClick={btnedit}
                >
                  Edit
                </button>
                <button
                  type="button"
                  name="btndelete"
                  className="btndelete"
                  onClick={btndelete}
                >
                  Delete
                </button>
              </td>
            </tr>
           
          </tbody>
        </table>

        <div className="btngrp">
          <button onClick={btnPrev} type="button" id="btnprev">
            Previous
          </button>
          <button onClick={btnNext} type="button" id="btnnext">
            Next
          </button>
        </div>
      </div>
    </>
  );
}
