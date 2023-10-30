import data from "./example-data";

export default function Education({
  changeDegree,
  changeInstitution,
  changeStart,
  changeEnd,
}) {

  function addDegreeDiv() {
    data.degrees.push({
      degree: 'Bcom (Industrial Psychology)',
      institution: 'Stellenbosch University',
      start: 2018,
      end: 2020,
      id: 1 // unique id
      },);
      console.log(data.degrees.length);
  }

  return (
    <div className="eduDiv">
      {data.degrees.map(d => 
        <li key={d.id}>
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
        </li>
      )}
      <div>
        <button onClick={addDegreeDiv}>Add</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div> 
  )
}

// Submit to add degree to Education function

// for each degree add <Degree />