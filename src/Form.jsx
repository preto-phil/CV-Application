import General from './General'
import Education from './Education'
import Experience from './Experience'

export default function Form() {
  return (
    <div className='form'>
      <General />
      <Education />
      <Experience />
    </div>
  )
}