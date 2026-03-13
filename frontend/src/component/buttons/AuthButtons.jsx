import { Button } from "@mui/material";

const authButtonSx = {
  background: (theme) =>
    `${theme.gradients.button} padding-box, ${theme.gradients.gold} border-box`,
  border: "4px solid transparent",
  borderRadius: "8px",
  color: "#fff",
  fontSize: { xs: "0.8rem", md: "1rem" },
  width: { xs: "100px", md: "140px" },
  textTransform: "none",
};

function AuthButton({ children }) {
  return <Button sx={authButtonSx}>{children}</Button>;
}

export function SignupButton() {
  return <AuthButton>إنشاء الحساب</AuthButton>;
}

export function LoginButton() {
  return <AuthButton>تسجيل الدخول</AuthButton>;
}
