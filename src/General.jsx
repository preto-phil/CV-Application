import { useState } from "react"

const info = {
  name: 'John Doe',
  address: '13 Graveyard Street, Spooky Town',
  tel: 2742069666,
  email: 'johndoe@gmail.com',
  website: 'www.allworknoplay.com',
}

export default function General({ changeName }) {
  const [allInfo, setInfo] = useState(info);

  return (
    <div className="generalDiv">
      <h2>General Information</h2>
      <label htmlFor="name">Name:{' '}
        <input 
          id="name"
          type="text" 
          onChange={changeName}
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