export default function Education({
  changeDegree,
  changeInstitution,
  changeStart,
  changeEnd,
}) {

  return (
    <div className="eduDiv">
      <div className="divDiv">
        <label htmlFor="degree">Degree:{' '}
          <input
            id="degree"
            type="text"
            onChange={changeDegree}
          />
        </label>
        <br />
        <label htmlFor="institution">Institution:{' '}
          <input
            id="institution"
            type="text"
            onChange={changeInstitution}
          />
        </label>
        <br />
        <label htmlFor="startDate">Start Date:{' '}
          <input
            id="startDate"
            type="number"
            min="1900"
            max="2023"
            onChange={changeStart}
          />
        </label>
        <br />
        <label htmlFor="endDate">End Date:{' '}
          <input
            id="endDate"
            type="number"
            min="1900"
            max="2023"
            onChange={changeEnd}
          />
        </label>
      </div>
      <div>
        <button>Add</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div> 
  )
}

// Submit to add degree to Education function