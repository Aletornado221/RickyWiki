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
        <div>
            <CharacterCard {...charactersArray[0]} />
        </div>
    )
}
export default MainTable;