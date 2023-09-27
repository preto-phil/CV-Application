

export default function Education() {
  return (
    <div className="generalDiv">
      <h2>Education</h2>
      <label htmlFor="degree">Degree:{' '}
        <input 
          id="degree"
          type="text" 
        />
      </label>
      <br />
      <label htmlFor="institution">Institution:{' '}
        <input 
          id="institution"
          type="text" 
        />
      </label>
      <br />
      <label htmlFor="startDate">Start Date:{' '}
        <input 
          id="startDate"
          type="number"
          min="1900" 
          max="2023"
        />
      </label>
      <br />
      <label htmlFor="endDate">End Date:{' '}
        <input 
          id="endDate"
          type="number"
          min="1900" 
          max="2023"
        />
      </label>
    </div>    
  )
}