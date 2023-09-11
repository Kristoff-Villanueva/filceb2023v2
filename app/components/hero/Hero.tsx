import { Box, Button, Grid } from "@mui/material";
import Image from "next/image";
import { Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box sx={{ color: "white" }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          container
          direction="column"
          justifyContent="flex-end"
          alignItems="center"
          sx={{
            height: "300px",
            backgroundImage: 'url("/hero/hero2.png")',
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <Typography variant="h3" sx={{ fontSize: "2rem" }}>
            Leaders building leaders.
          </Typography>
          <Typography variant="body1" textAlign="center">
            The home for MSME leaders looking for mentorship, collaborative
            opportunities & leadership mastery.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginBottom: "1rem" }}
          >
            Contained
          </Button>
        </Grid>
        <Grid item md={6} sx={{ display: { xs: "none", md: "flex" } }}>
          <Image
            src="/hero/hero4.png"
            width={1920}
            height={1080}
            alt="Hero Image"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
