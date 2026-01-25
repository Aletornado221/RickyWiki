import { Grid, Typography } from "@mui/material";
import type { Character } from "../../../Types/Character";

function CharacterInfo(character: Character) {
    return (
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <Typography variant="caption" sx={{ mb: 0.5 }}>
                    <strong>Gender:</strong> {character.gender}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="caption" sx={{ mb: 0.5 }}>
                    <strong>Type:</strong> {character.type || 'N/A'}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="caption" sx={{ mb: 0.5 }}>
                    <strong>Origin:</strong> {character.origin?.name || 'N/A'}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="caption" sx={{ mb: 0.5 }}>
                    <strong>Location:</strong> {character.location?.name || 'N/A'}
                </Typography>
            </Grid>
        </Grid>
    );
} export default CharacterInfo;