import { useState } from "react"

const info = {
  name: 'John Doe',
  address: '13 Graveyard Street, Spooky Town',
  tel: '+27 420 69 666',
  email: 'johndoe@gmail.com',
  website: 'www.allworknoplay.com',
}



function General() {
  const [allInfo, setInfo] = useState(info);

  function handleNameChange() {
    setInfo({ ...allInfo, name: event.target.value })
  }

  return (
    <div className="generalDiv">
      <h2>General Information</h2>
      <label htmlFor="name">Name:{' '}
        <input 
          id="name"
          type="text" 
          onChange={(e) => handleNameChange(e)}
        />
      </label>
      <p>{allInfo.name}</p>
      <br />
      <label htmlFor="address">Address:{' '}
        <input 
          id="address"
          type="text" 
          onChange={(e) => setInfo({ ...allInfo, address: e.target.value })}
        />
      </label>
      <p>{allInfo.address}</p>
      <br />
      <label htmlFor="tel">Tel:{' '}
        <input 
          id="tel"
          type="tel" 
          onChange={(e) => setInfo({ ...allInfo, tel: e.target.value })}
        />
      </label>
      <p>{allInfo.tel}</p>
      <br />
      <label htmlFor="email">Email:{' '}
        <input 
          id="email"
          type="email" 
          onChange={(e) => setInfo({ ...allInfo, email: e.target.value })}
        />
      </label>
      <p>{allInfo.email}</p>
      <br />
      <label htmlFor="website">Website:{' '}
        <input 
          id="website"
          type="url" 
          onChange={(e) => setInfo({ ...allInfo, website: e.target.value })}
        />
      </label>
      <p>{allInfo.website}</p>
    </div>    
  )
}

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

export function Education() {
  return (
    <div className="generalDiv">
      <h2>Education</h2>
      <Degree />
    </div>    
  )
}

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

export function Experience() {
  return (
    <div className="generalDiv">
      <Job />
    </div>    
  )
}

export function Form() {
  return (
    <div className='form'>
      <General />
      <Education />
      <Experience />
    </div>
  )
}

export function Page() {
  return (
    <div className="page">
      <p>{info.name}</p>
    </div>
  )
}

export default function CV() {
  return (
    <>
      <Form />
      <Page />      
    </>
  )
}