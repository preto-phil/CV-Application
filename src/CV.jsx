import { useState } from 'react'
import Form from './Form'
import Page from './Page'

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
  const [name, setName] = useState(null);

  function changeName(event) {
    setName(event.target.value)
  }
  
  return (
    <>
      <Form changeName={changeName} />
      <Page name={name} />      
    </>
  )
}