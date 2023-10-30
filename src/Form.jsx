import General from './General'
import Education from './Education'
import Experience from './Experience'
import { useState } from "react"

export default function Form(
  { 
    changeName,
    changeAddress,
    changeEmail,
    changeTel,
    changeWebsite,
    changeDegree,
    changeInstitution,
    changeStart,
    changeEnd,
    degrees
 }) {

  const [hideGen, setHideGen] = useState(false);
  const [hideEdu, setHideEdu] = useState(false);

  function hideGenInfo() {
    !hideGen ? setHideGen(true) : setHideGen(false);
  }

  function hideEduInfo() {
    !hideEdu ? setHideEdu(true) : setHideEdu(false);
  }

  return (
    <div className='form'>
      <h2 onClick={hideGenInfo}>General Information</h2>
      {hideGen ? null :
      <General 
        changeName={changeName} 
        changeAddress={changeAddress}
        changeEmail={changeEmail}
        changeTel={changeTel}
        changeWebsite={changeWebsite}  
      />}
      <h2 onClick={hideEduInfo}>Education</h2>
      {hideEdu ? null :
      <Education 
        changeDegree={changeDegree}
        changeInstitution={changeInstitution}
        changeStart={changeStart}
        changeEnd={changeEnd}
        degrees={degrees}
      />}
      <Experience />
    </div>
  )
}

// For each degree and for each job 