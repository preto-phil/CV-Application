import { useState } from "react"

const job =
  {
    title: 'Software developer',
    company: 'Bchekcd',
    start: 2020,
    end: 2023,
    id: 0
  }

function Job() {
  const [jobInfo, setJobInfo] = useState(job)

  return (
    <>
      <h2>Experience</h2>
      <label htmlFor="title">Job title:{' '}
        <input 
          id="title"
          type="text" 
          onChange={(e) => setJobInfo({ ...jobInfo, title: e.target.value })}
        />
      </label>
      <p>{jobInfo.title}</p>
      <br />
      <label htmlFor="institution">Company:{' '}
        <input 
          id="institution"
          type="text" 
          onChange={(e) => setJobInfo({ ...jobInfo, company: e.target.value })}          
        />
      </label>
      <p>{jobInfo.company}</p>
      <br />
      <label htmlFor="startDate">Start Date:{' '}
        <input 
          id="startDate"
          type="number"
          min="1900" 
          max="2023"
          onChange={(e) => setJobInfo({ ...jobInfo, start: e.target.value })}
        />
      </label>
      <p>{jobInfo.start}</p>
      <br />
      <label htmlFor="endDate">End Date:{' '}
        <input 
          id="endDate"
          type="number"
          min="1900" 
          max="2023"
          onChange={(e) => setJobInfo({ ...jobInfo, end: e.target.value })}
        />
      </label>  
      <p>{jobInfo.end}</p>  
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