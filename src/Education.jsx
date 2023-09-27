import { useState } from "react"

const degree =
  {
    degree: 'Bcom (Industrial Psychology)',
    institution: 'Stellenbosch University',
    start: 2018,
    end: 2020,
    id: 0
  }

function Degree() {
  const [degreeInfo, setDegreeInfo] = useState(degree)

  return (
    <>
      <label htmlFor="degree">Degree:{' '}
        <input 
          id="degree"
          type="text" 
          onChange={(e) => setDegreeInfo({ ...degreeInfo, degree: e.target.value })}
        />
      </label>
      <p>{degreeInfo.degree}</p>
      <br />
      <label htmlFor="institution">Institution:{' '}
        <input 
          id="institution"
          type="text" 
          onChange={(e) => setDegreeInfo({ ...degreeInfo, institution: e.target.value })}
        />
      </label>
      <p>{degreeInfo.institution}</p>
      <br />
      <label htmlFor="startDate">Start Date:{' '}
        <input 
          id="startDate"
          type="number"
          min="1900" 
          max="2023"
          onChange={(e) => setDegreeInfo({ ...degreeInfo, start: e.target.value })}
        />
      </label>
      <p>{degreeInfo.start}</p>
      <br />
      <label htmlFor="endDate">End Date:{' '}
        <input 
          id="endDate"
          type="number"
          min="1900" 
          max="2023"
          onChange={(e) => setDegreeInfo({ ...degreeInfo, end: e.target.value })}
        />
      </label>    
      <p>{degreeInfo.end}</p>
    </>
  )
}

export default function Education() {
  return (
    <div className="generalDiv">
      <h2>Education</h2>
      <Degree />
    </div>    
  )
}

// Submit to add degree to Education function