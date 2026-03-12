import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    main: "#1a5276",
  },
  border: {
    light: "#DDC178",
    main: "#BEA263",
    dark: "#B89964",
  },
  gradients: {
    gold: "linear-gradient(135deg, #DDC178, #BEA263, #B89964)",
  },
  typography: {
    fontFamily: ' "Roboto", "Helvetica Neue", Arial, sans-serif',
  },
});

export default theme;
