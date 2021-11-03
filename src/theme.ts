import { createTheme } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#EB514E",
    },
    secondary: {
      main: "rgb(57, 154, 113)",
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderWidth: 2,
          borderColor: theme,
        },
      },
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
