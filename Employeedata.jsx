import * as React from 'react';
import './style.css';


export default function Employeedata(){

  return(
    <>
    <div class="main" id="main">
        <button onclick="btnaddemp()" type="button" id="btnadd">Add Employee</button>
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

                    
                    <td><button type="button" name="btnedit" class="btnedit" onclick="btnedit()">Edit</button>
                        <button type="button" name="btndelete" class="btndelete" onclick="btndetete()">Delete</button>
                    </td>
                </tr>
                <tr>
                <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>

                    <td><button type="button" name="btnedit" class="btnedit" onclick="btnedit()">Edit</button>
                        <button type="button" name="btndelete" class="btndelete" onclick="btndetete()">Delete</button>
                    </td>
                </tr>
                <tr>
                <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>

                    <td><button type="button" name="btnedit" class="btnedit" onclick="btnedit()">Edit</button>
                        <button type="button" name="btndelete" class="btndelete" onclick="btndetete()">Delete</button>
                    </td>
                </tr>
             



            </tbody>


        </table>

        <div class="btngrp">
            <button onclick="btnprev()" type="button" id="btnprev">Previous</button>
            <button onclick="btnnext()" type="button" id="btnnext">Next</button>

        </div>


    </div>
    
    
    
    
    
    </>


    )


}