import * as React from 'react';
import './style.css';
import './main.js';

export default function Addemployee() {
  
  function Back() {
   document.getElementById('main').style.display = 'block';
    document.getElementById('main2').style.display = 'none';
  }

  
  function submit(){

  }

  return (
    <>
      <div className="main2">
        <form>
          <label for="fname">
            <b>FirstName</b>
          </label>
          <input type="text" name="fname" required />
          <br />
          <br />
          <label for="lname">
            <b>LastName</b>
          </label>
          <input type="text" name="lname" required />
          <br />
          <br />
          <label for="email">
            <b>email</b>
          </label>
          <input type="email" name="email" required />
          <br />
          <br />
          <label for="phone">
            <b>phone</b>
          </label>
          <input type="number" name="phone" required />
          <br />
          <br />
          <label>
            <b>Select Gender: </b>{' '}
          </label>
          <input type="radio" value="Male" name="r" required />{' '}
          <label>Male</label>
          <input type="radio" value="Female" name="r" required />
          <label>Female</label>
          <br />
          <br />
          <label>
            <b>Department</b>{' '}
          </label>
          <select name="dept">
            <option value="PHP">PHP</option>
            <option value=".NET">.NET</option>
            <option value="SEO">SEO</option>
            <option value="MOBILE">MOBILE</option>
            <option value="ADMIN/HR">ADMIN/HR</option>
            <option value="ACCOUNT">ACCOUNT</option>
          </select>
          <br />
          <br />
          <label for="skills">
            <b>Skills: </b>{' '}
          </label>
          <input type="checkbox" name="Programming" value="Programming" />
          <label for="Programming">Programming</label>
          <input type="checkbox" name="Communication" value="Communication" />
          <label for="Communication">Communication</label>
          <input type="checkbox" name="Finance" value="Finance" />
          <label for="Finance">Finance</label>
          <input type="checkbox" name="Recruitment" value="Recruitment" />
          <label for="Recruitment">Recruitment</label>
          <br />
          <br />
          <input type="checkbox" name="  Optimization" value="Optimization" />
          <label for="Optimization">Optimization</label>
          <input
            type="checkbox"
            name="App Development"
            value="App Development"
          />
          <label for="App Development">App Development</label>
          <input
            type="checkbox"
            name="Frontend Technology"
            value="Frontend Technology"
          />
          <label for="Frontend Technology">Frontend Technology</label>
          <input
            type="checkbox"
            name="Backend Technology"
            value="Backend Technology"
          />
          <label for="Backend Technology">Backend Technology</label>
          <br />
          <br />
          <label for="about" id="about">
            <b>About</b>
          </label>
          <textarea name="about"></textarea>
          <br />
          <br />
          <button type="button" name="submit" id="btnsub" onClick={submit}>
            Submit
          </button>
          <button type="button" name="back" id="btnback" onClick={Back}>
            Back
          </button>
        </form>
      </div>
    </>
  );
}
