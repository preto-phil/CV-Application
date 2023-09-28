import { useState } from 'react'
import Form from './Form'
import Page from './Page'
import data from './example-data';

// Share state between the two components
/* function add() {

}

function delete() {

}

function edit() {

} */

/* const info = {
  name: 'John Doe',
  address: '13 Graveyard Street, Spooky Town',
  tel: 2742069666,
  email: 'johndoe@gmail.com',
  website: 'www.allworknoplay.com',
}

function controlGeneralState() {

} */

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

      />      
    </>
  )
}