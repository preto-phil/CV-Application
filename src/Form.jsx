import General from './General'
import Education from './Education'
import Experience from './Experience'

export default function Form(
  { 
    changeName,
    changeAddress,
    changeEmail,
    changeTel,
    changeWebsite 
 }) {
  return (
    <div className='form'>
      <General 
        changeName={changeName} 
        changeAddress={changeAddress}
        changeEmail={changeEmail}
        changeTel={changeTel}
        changeWebsite={changeWebsite}     
      />
      <Education />
      <Experience />
    </div>
  )
}