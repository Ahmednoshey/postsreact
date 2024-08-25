
import { ThemeProvider } from '@emotion/react';
import { Box, createTheme, CssBaseline, Button } from '@mui/material';
import getDesignTokens from 'Componants/theme';
import React, { useMemo, useState } from 'react';

const Root = () => {
  const [mode, setmode] = useState(
    localStorage.getItem("thememod") === null ?
    "light" 
    : localStorage.getItem("thememod") === "light"?
    "light"
    : "dark"
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);


  return (
    <ThemeProvider theme={theme}>
  <CssBaseline />
    <Box>
      <h2>ahmed shoaib</h2>

      


      <Button variant="text"  color="secondary" onClick={(eo) => {
        localStorage.setItem("thememod", theme.palette.mode === "light"? "dark" : "light")
        setmode(localStorage.getItem("thememod"))
      }}>
      change theme
      </Button>

    </Box>
    </ThemeProvider>
  );
}

export default Root;
