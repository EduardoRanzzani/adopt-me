import { FunctionComponent, useContext, useEffect, useState } from 'react';
import { Animal, Pet, PetAPIResponse } from './APIResponseTypes';
import Results from './Results';
import ThemeContext from './ThemeContext';
import useBreedList from './useBreedList';

const ANIMALS: Animal[] = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams: FunctionComponent = () => {
  const [animal, setAnimal] = useState("" as Animal);
  const [location, setLocation] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([] as Pet[]);
  const [breeds] = useBreedList(animal);
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    void requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = (await res.json()) as PetAPIResponse;
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form onSubmit={(e) => {
        e.preventDefault();
        void requestPets();
      }} >
        <label htmlFor="location">
          Location:
          <input id="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            onBlur={e => setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>

        <label htmlFor="animal">
          Animal:
          <select id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value as Animal)}
            onBlur={e => setAnimal(e.target.value as Animal )}
          >
            <option value="">---</option>
            {ANIMALS.map(animal => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed:
          <select id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option value="">---</option>
            {breeds.map(breed => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="theme">
          Theme:
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>

        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;