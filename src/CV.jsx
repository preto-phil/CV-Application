import { useState } from 'react'
import Form from './Form'
import Page from './Page'
import data from './example-data';

export default function CV() {
  const [name, setName] = useState(data.genInfo.name);
  const [address, setAddress] = useState(data.genInfo.address);
  const [email, setEmail] = useState(data.genInfo.email);
  const [tel, setTel] = useState(data.genInfo.tel);
  const [website, setWebsite] = useState(data.genInfo.website);

  function changeName(event) {
    setName(event.target.value)
  }
  function changeAddress(event) {
    setAddress(event.target.value)
  }
  function changeEmail(event) {
    setEmail(event.target.value)
  }
  function changeTel(event) {
    setTel(event.target.value)
  }
  function changeWebsite(event) {
    setWebsite(event.target.value)
  }

  const defaultDegree = {
    degree: 'Bcom (Industrial Psychology)',
    institution: 'Stellenbosch University',
    start: 2018,
    end: 2020,
    id: 0 // unique id nb
  };

  const [degree, setDegree] = useState(defaultDegree.degree);
  const [institution, setInstitution] = useState(defaultDegree.institution)
  const [start, setStart] = useState(defaultDegree.start)
  const [end, setEnd] = useState(defaultDegree.end)

  function changeDegree(event) {
    setDegree(event.target.value)
  }

  function changeInstitution(event) {
    setInstitution(event.target.value)
  }

  function changeStart(event) {
    setStart(event.target.value)
  }

  function changeEnd(event) {
    setEnd(event.target.value)
  }
  
  const [degrees, setDegrees] = useState([
    {
      degree: degree,
      institution: institution,
      start: start,
      end: end,
      id: 0 // unique id nb
    },
  ]);

  function addDegree() {
    setDegrees(degrees => [...degrees, 
      {
        degree: degree,
        institution: institution,
        start: start,
        end: end,
        id: 1 // unique id nb
      }
    ]);
  }

  return (
    <>
      <Form 
        changeName={changeName} 
        changeAddress={changeAddress}
        changeEmail={changeEmail}
        changeTel={changeTel}
        changeWebsite={changeWebsite}
        changeDegree={changeDegree}
        changeInstitution={changeInstitution}
        changeStart={changeStart}
        changeEnd={changeEnd}
        degrees={degrees}
        addDegree={addDegree}
      />
      <Page 
        name={name} 
        address={address} 
        email={email} 
        tel={tel} 
        website={website} 
        degree={degree}
        institution={institution} 
        start={start} 
        end={end} 
        id={degree.id}
        degrees={degrees}
      />      
    </>
  )
}

// NB moet components op skyf - anderste gaan die degrees mekaar se data uit skakel
// Skyf alles na Form toe (?)