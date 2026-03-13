import { Box } from "@mui/material";

function Home() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Hero Background */}
      <Box
        component="picture"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.5,
        }}
      >
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
          src="/images/mihrab-hero-1920.png"
          alt="mihrab hero background"
          sx={{
            display: "block",
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
    </Box>
  );
}
export default Home;
