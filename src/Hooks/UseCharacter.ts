import { UseApi } from "./UseApi";

export function useCharacter() {

    const getCharacters = async () => {
        const { fetchData } = UseApi();
        const data = await fetchData({ endpoint: "/character" });
        return data;
    }

    return { getCharacters };
}