import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import type { Character } from '../../Types/Character.ts';
import CharacterMedia from './CardComponents/CharacterMedia.tsx';
import CharacterContent from './CardComponents/CharacterContent.tsx';

function CharacterCard(character: Character) {

  return (
    <Card sx={{ display: 'flex', maxWidth: 500, minHeight: 125 }}>
      <CardActionArea sx={{ display: 'flex', width: '100%' }}>
        <CharacterMedia {...character} />
        <CharacterContent {...character} />
      </CardActionArea>
    </Card>
  );
} export default CharacterCard;
