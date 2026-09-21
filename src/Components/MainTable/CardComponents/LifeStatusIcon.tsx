import { Chip, createTheme, Stack, ThemeProvider } from "@mui/material";
import type { Character } from "../../../Types/Character";

const theme = createTheme({
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          // Match 24px = 3 * 2 + 1.125 * 16
          boxSizing: 'content-box',
          padding: 3,
          fontSize: '1.125rem',
        },
      },
    },
  },
});

function LifeStatusIcon(character: Character) {

   const statusColor = (() => {
    switch (character.status) {
      case 'Alive': return 'success';
      case 'Dead': return 'error';
      default: return 'default';
    }
  })();

    return (
    <Stack direction="row" spacing={2}>
      <ThemeProvider theme={theme}>
        <Chip 
          label={character.status}
          color={statusColor}
          variant="filled"
        />
      </ThemeProvider>
    </Stack>
  );
} export default LifeStatusIcon;

