import { Typography, Box } from "@mui/material";
import type { Character } from "../../../Types/Character";
import LifeStatusIcon from "./LifeStatusIcon";

function CharacterHeader(character: Character) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="h6" component="div" sx={{ mb: 0 }}>
                    {character.name}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {character.species}
                </Typography>
            </Box>
            <LifeStatusIcon {...character} />
        </Box>
    );
} export default CharacterHeader;