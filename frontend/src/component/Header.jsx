import { AppBar, Container, Box } from "@mui/material";
import logo from "/images/mihrab-logo.png";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: (theme) => theme.gradients.background,
        height: { xs: "auto", md: 75 },
      }}
    >
      <Container maxWidth="xl">
        <Box></Box>
        <Box>
          <img src={logo} alt="Mihrab Logo" height={70} />
        </Box>
      </Container>
    </AppBar>
  );
}
