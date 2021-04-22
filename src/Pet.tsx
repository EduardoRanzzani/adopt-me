import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  name: string;
  animal: string;
  breed: string;
  images: string[];
  location: string;
}

const Pet: FunctionComponent<Props> = ({ id, name, breed, animal, images, location }) => {
  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;