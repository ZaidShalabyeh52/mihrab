import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const ButtonSx = {
  background: (theme) =>
    `${theme.gradients.button} padding-box, ${theme.gradients.gold} border-box`,
  border: "4px solid transparent",
  borderRadius: "8px",
  color: "#fff",
  fontSize: { xs: "0.8rem", md: "1.125rem" },
  width: { xs: "150px", md: "220px" },
  textTransform: "none",
  whiteSpace: "nowrap",
};

export default function GreenButton({ text, link }) {
  return (
    <Button sx={ButtonSx} component={RouterLink} to={"/" + link}>
      {text}
    </Button>
  );
}
