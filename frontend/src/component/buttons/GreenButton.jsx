import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const ButtonSx = {
  background: (theme) =>
    `${theme.gradients.button} padding-box, ${theme.gradients.gold} border-box`,
  border: "4px solid transparent",
  borderRadius: "8px",
  color: "#fff",
  fontSize: "1rem",
  width: { xs: "150px", md: "220px" },
  textTransform: "none",
  whiteSpace: "nowrap",
  minWidth: "fit-content",
  fontFamily: "Cairo, Amiri, Roboto, Helvetica Neue, Arial, sans-serif",
  width: "100%",
};

export default function GreenButton({ text, link, sx }) {
  return (
    <Button sx={{ ...ButtonSx, ...sx }} component={RouterLink} to={"/" + link}>
      {text}
    </Button>
  );
}
