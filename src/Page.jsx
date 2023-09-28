export default function Page(
  { 
    name,
    email,
    address,
    tel,
    website
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
    </div>
  )
}