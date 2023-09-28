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
    changeWebsite 
 }) {

  const [hide, setHide] = useState(false);

  function hideGenInfo() {
    if (!hide) {
      setHide(true);
    } else {
      setHide(false);
    }
  }

  return (
    <div className='form'>
      <h2 onClick={hideGenInfo}>General Information</h2>
      {hide ? null :
      <General 
        changeName={changeName} 
        changeAddress={changeAddress}
        changeEmail={changeEmail}
        changeTel={changeTel}
        changeWebsite={changeWebsite}     
      />}
      <Education />
      <Experience />
    </div>
  )
}

// For each degree and for each job 