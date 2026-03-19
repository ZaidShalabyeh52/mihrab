import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const authButtonSx = {
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

export default function AuthButton({}) {
  return (
    <Button sx={authButtonSx} component={RouterLink} to="/auth">
      {" "}
      تسجيل الدخول / إنشاء الحساب
    </Button>
  );
}
