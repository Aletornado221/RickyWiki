import { CardContent } from "@mui/material";
import type { Character } from "../../../Types/Character";
import CharacterHeader from "./CharacterHeader";
import CharacterInfo from "./CharacterInfo";

function CharacterContent(character: Character) {
    return (
        <CardContent sx={{ flex: 1, py: 0, px: 2 }}>
            <CharacterHeader {...character} />
            <CharacterInfo {...character} />
        </CardContent>
    );
} export default CharacterContent;