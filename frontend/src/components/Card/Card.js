import "./Card.css";
const Card = ({ data }) => {
  console.log(data);
  const { id, name, username, email, address, phone, website, company } = data;
  return (
    <div className="card">
      <div className="card-user">
        {" "}
        {id} | {name} | {username}
      </div>
      <div className="card-info">
        <p>
          <b>Contact: </b>
        </p>{" "}
        {email} | {phone} | {website}
      </div>
      <div className="card-info">
        <p>
          <b>Company: </b>
        </p>
        <p>{company.name}</p>
        <p>{company.catchPhrase}</p>
        <p>{company.bs}</p>
      </div>
      <div className="card-info">
        <p>
          <b>Address: </b>
        </p>
        <p>
          {address.street}, {address.suite}, {address.city}
        </p>
        <p>zipcode: {address.zipcode}</p>
        <p>
          lat: {address.geo.lat}, lng: {address.geo.lng}
        </p>
      </div>
    </div>
  );
};

export default Card;
