import * as React from 'react';
import './style.css';


export default function Navbar(){

  return(
<>
<nav className="search">
        <div  className="search-div">
          <h2>Employee Details</h2>
          <div><input type="search" name="search"/><button type="button" id="btnsearch" onclick="btnsearch()">Search</button></div>
          
        </div>
    </nav>
    <footer className="footer">
        <div className="footer-div">
            <p>All Copyrights Reserved by Employee Managment</p>
        </div>
    </footer>

</>

    
  )

}