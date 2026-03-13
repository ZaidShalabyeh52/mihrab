import { Box, Container } from "@mui/material";

function Home() {
  return (
    <Container disableGutters sx={{ position: "relative", height: "100vh" }}>
      {/* Hero Background */}
      <picture className="absolute inset-0 w-full h-full">
        <source
          media="(max-width: 767px)"
          srcSet={"/images/mihrab-hero-480.png"}
        />
        <source
          media="(min-width: 768px) and (max-width: 1023px)"
          srcSet={"/images/mihrab-hero-768.png"}
        />
        <source
          media="(min-width: 1024px) and (max-width: 1439px)"
          srcSet={"/images/mihrab-hero-1024.png"}
        />
        <source
          media="(min-width: 1440px)"
          srcSet={"/images/mihrab-hero-1440.png"}
        />
        <Box
          component="img"
          src="/images/mihrab-hero-480.png"
          alt="mihrab hero background"
          sx={{
            display: "block",
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </picture>
    </Container>
  );
}
export default Home;
