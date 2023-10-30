export default function Page(
  { 
    name,
    email,
    address,
    tel,
    website,
/*     degree,
    institution,
    start,
    end,
    id, */
    degrees
  }
) {
  return (
    <div className="page">
      <div className="genPage">
        <h2>General Information</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Address: {address}</p>
        <p>Tel: {tel}</p>
        <p>Website: {website}</p>
      </div>
      <div className="eduPage">
        <h2>Education</h2>
        {degrees.map((d, index) => 
        <li key={index}>
          <p>{d.degree}</p>
          <p>{d.institution}</p>
          <p>{d.start}</p>
          <p>{d.end}</p>
        </li>
        )}
      </div>
    </div>
  )
}

// for each degree array 

/* 

Pass down degree array as a prop from CV
useState in CV component

const degrees = []

example of an degree:

{
  id: uuid() | or | 0,
  degree: 'Bcom (Industrial Psychology)',
  institution: 'Stellenbosch University',
  start: 2018,
  end: 2020,
}

degrees.map(d => 
  <li key={id}>
    <p>{d.degree}</p>
    <p>{d.institution}</p>
    <p>{d.start}</p>
    <p>{d.end}</p>
</li>
)

  return (
    <div className="page">
      <div className="genPage">
        <h2>General Information</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Address: {address}</p>
        <p>Tel: {tel}</p>
        <p>Website: {website}</p>
      </div>
      <div className="eduPage">
        <h2>Education</h2>
        {degrees.map(d => 
          <li key={d.id}>
            <p>{d.degree}</p>
            <p>{d.institution}</p>
            <p>{d.start} - {d.end}</p>
          </li>
        )}
      </div>
    </div>
  )

*/