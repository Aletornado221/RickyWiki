import { CardMedia } from "@mui/material";
import type { Character } from "../../../Types/Character";


function CharacterMedia(character: Character) {
    return (
        <CardMedia
          component="img"
          sx={{ width: 100, height: 160, objectFit: 'cover', flexShrink: 0 }}
          image={character.image}
          alt={character.name}
        />
    );
} export default CharacterMedia;