import { FunctionComponent } from 'react';
import { Pet as PetType } from './APIResponseTypes';
import Pet from './Pet';

const Results: FunctionComponent<{pets: PetType[]}> = ({ pets }) => {
  return (
    <div className="search">
      { !pets.length ? (
        <h2>No pets found.</h2>
      ) : (
        pets.map(pet => (
          <Pet
            id={pet.id}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            animal={pet.animal}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
          />
        ))
      )}
    </div>
  );
};

export default Results;