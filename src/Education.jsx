export default function Education({
  changeDegree,
  changeInstitution,
  changeStart,
  changeEnd,
  degrees,
  addDegree
}) {

  return (
    <div className="eduDiv">
      {degrees.map((d, index) => 
        <li key={index}>
          <div className="divDiv">
          <label>Degree:{' '}
            <input
              className="degree"
              type="text"
              onChange={changeDegree}
            />
          </label>
          <br />
          <label>Institution:{' '}
            <input
              className="institution"
              type="text"
              onChange={changeInstitution}
            />
          </label>
          <br />
          <label>Start Date:{' '}
            <input
              className="startDate"
              type="number"
              min="1900"
              max="2023"
              onChange={changeStart}
            />
          </label>
          <br />
          <label>End Date:{' '}
            <input
              className="endDate"
              type="number"
              min="1900"
              max="2023"
              onChange={changeEnd}
            />
          </label>
        </div>
        </li>
      )}
      <div>
        <button onClick={addDegree}>Add</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div> 
  )
}

// Submit to add degree to Education function

// for each degree add <Degree />