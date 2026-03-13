import { AppBar, Container, Box, Link as MuiLink } from "@mui/material";
import logo from "/images/mihrab-logo.png";
import { LoginButton, SignupButton } from "./buttons/AuthButtons";
import { Link as RouterLink, useLocation } from "react-router-dom";

const links = [
  { name: "تواصل معنا", path: "/contact", key: "contact" },
  { name: "عن المنصة", path: "/about", key: "about" },
  { name: "الخدمات", path: "/services", key: "services" },
  { name: "الرئيسية", path: "/", key: "home" },
];

export default function Header() {
  const { pathname } = useLocation();

  return (
    <AppBar
      position="relative"
      sx={{
        display: "flex",
        alignItems: "center",
        background: (theme) => theme.gradients.background,
        height: { xs: "auto", md: 75 },
        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "3px",
          background: (theme) => theme.gradients.gold,
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <LoginButton />
          <SignupButton />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 0,
          }}
        >
          {links.map((link, index) => (
            <MuiLink
              component={RouterLink}
              key={link.key}
              to={link.path}
              sx={{
                textDecoration: "none",
                position: "relative",
                display: "flex",
                alignItems: "center",
                mt: 1,
                color: (theme) =>
                  pathname === link.path
                    ? theme.palette.secondary.main
                    : theme.palette.main,
                fontSize: { xs: "1.2rem", md: "1.45rem" },
                fontWeight: 700,
                px: 2.5,
                py: 0.5,
                transition: "all 0.3s ease",

                "&:hover": {
                  color: (theme) => theme.palette.secondary.main,
                  textShadow: (theme) =>
                    `0 0 8px ${theme.palette.secondary.main}40`,
                },

                ...(index !== links.length - 1 && {
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    height: "50%",
                    width: "1px",
                    bgcolor: (theme) => theme.border.main,
                  },
                }),
              }}
            >
              {link.name}
            </MuiLink>
          ))}

          <img src={logo} alt="Mihrab Logo" height={70} />
        </Box>
      </Container>
    </AppBar>
  );
}
