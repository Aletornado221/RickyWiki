/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react"
import { useCharacter } from "../../Hooks/UseCharacter";
import CharacterCard from "./CharacterCard";
import type { Character } from "../../Types/Character.ts";



function MainTable() {

    const [charactersArray, setCharactersArray] = useState<Character[]>([]);
    const [charactersInfo, setCharactersInfo] = useState([]);
    const { getCharacters } = useCharacter();
    const getCharactersList = async () => {
        const characters = await getCharacters();
        setCharactersArray(characters.results);
        setCharactersInfo(characters.info);
    };

    useEffect(() => {
        getCharactersList();
    }, []);

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '20px' }}>
            {charactersArray.map((character) => (
                <CharacterCard key={character.id} {...character} />
            ))}
        </div>
    )
}
export default MainTable;