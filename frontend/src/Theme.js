import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    main: "#BEA263",
    secondary: {
      main: "#21593A",
    },
  },
  border: {
    light: "#DDC178",
    main: "#BEA263",
    dark: "#B89964",
  },
  background: {
    parchment: "#F8EFE4",
    linen: "#F5EFE2",
    button: {
      light: "#255F3B",
      main: "#21593A",
      dark: "#205838",
    },
  },
  gradients: {
    gold: "linear-gradient(to bottom left, #DDC178, #BEA263, #B89964)",
    background: "linear-gradient(to left, #F8EFE4, #F5EFE2)",
    button: "linear-gradient(to left, #255F3B, #205838)",
  },
  typography: {
    fontFamily:
      '"Amiri" ,"Cairo", "Roboto", "Helvetica Neue", Arial, sans-serif',
  },
});

export default theme;
