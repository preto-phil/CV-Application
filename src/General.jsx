export default function General(
  { 
    changeName,
    changeAddress,
    changeEmail,
    changeTel,
    changeWebsite 
  }
) {



  return (
    <div className="genFormDiv">
      <div className="genInfo">
        <label htmlFor="name">Name:{' '}
          <input
            id="name"
            type="text"
            onChange={changeName}
          />
        </label>
        <br />
        <label htmlFor="email">Email:{' '}
          <input
            id="email"
            type="email"
            onChange={changeEmail}
          />
        </label>
        <br />
        <label htmlFor="address">Address:{' '}
          <input
            id="address"
            type="text"
            onChange={changeAddress}
          />
        </label>
        <br />
        <label htmlFor="tel">Tel:{' '}
          <input
            id="tel"
            type="tel"
            onChange={changeTel}
          />
        </label>
        <br />
        <label htmlFor="website">Website:{' '}
          <input
            id="website"
            type="url"
            onChange={changeWebsite}
          />
        </label>
      </div>
    </div>    
  )
}