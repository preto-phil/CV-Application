/* const job = [
  {
    title: 'Job Title',
    company: 'Company',
    start: 'Start',
    end: 'End'
  },
] */

function Job() {
  return (
    <>
      <h2>Education</h2>
      <label htmlFor="title">Job title:{' '}
        <input 
          id="title"
          type="text" 
        />
      </label>
      <br />
      <label htmlFor="institution">Company:{' '}
        <input 
          id="institution"
          type="text" 
        />
      </label>
      <br />
      <label htmlFor="startDate">Start Date:{' '}
        <input 
          id="startDate"
          type="number"
          min="1900" 
          max="2023"
        />
      </label>
      <br />
      <label htmlFor="endDate">End Date:{' '}
        <input 
          id="endDate"
          type="number"
          min="1900" 
          max="2023"
        />
      </label>    
    </>
  )
}

export default function Experience() {
  return (
    <div className="generalDiv">
      <Job />
    </div>    
  )
}