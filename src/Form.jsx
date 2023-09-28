import General from './General'
import Education from './Education'
import Experience from './Experience'

export default function Form({ changeName }) {
  return (
    <div className='form'>
      <General changeName={changeName} />
      <Education />
      <Experience />
    </div>
  )
}