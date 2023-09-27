

export default function General() {
  return (
    <div className="generalDiv">
      <h2>General Information</h2>
      <label htmlFor="name">Name:{' '}
        <input 
          id="name"
          type="text" 
        />
      </label>
      <br />
      <label htmlFor="address">Address:{' '}
        <input 
          id="address"
          type="text" 
        />
      </label>
      <br />
      <label htmlFor="email">Email:{' '}
        <input 
          id="email"
          type="email" 
        />
      </label>
    </div>    
  )
}