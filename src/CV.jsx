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

  const degrees = [
    {
      degree: 'Bcom (Industrial Psychology)',
      institution: 'Stellenbosch University',
      start: 2018,
      end: 2020,
      id: 0
    },
    {
      degree: 'Bcom Hons (Industrial Psychology)',
      institution: 'Stellenbosch University',
      start: 2021,
      end: 2021,
      id: 1
    },
  ]

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

/*   const [degreeInfo, setDegreeInfo] = useState(degrees[0])

  function changeDegrees() {
    setDegreeInfo(...degreeInfo, )
  }
   */
  return (
    <>
      <Form 
        changeName={changeName} 
        changeAddress={changeAddress}
        changeEmail={changeEmail}
        changeTel={changeTel}
        changeWebsite={changeWebsite}

      />
      <Page 
        name={name} 
        address={address} 
        email={email} 
        tel={tel} 
        website={website} 
        degrees={degrees}
      />      
    </>
  )
}