import { useEffect, useState } from "react";

export default function Starwars(props) {
    const [characters, setCharacters] = useState([]);  //if characters is array the initial value should be [] !!!
    
    useEffect(() => {
        fetch(`https://swapi.dev/api/people`)  //async functions don't work in useEffect
            .then((response) => response.json())
            .then((data) => {
                setCharacters(data.results);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h1>SW Characters</h1>

            <ul>
                {characters.map(character => <li key={character.url}>{character.name}</li>)}
            </ul>
        </div>
    );
}