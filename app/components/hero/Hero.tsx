import { Box, Button, Grid } from "@mui/material";
import Image from "next/image";
import { Typography } from "@mui/material";
import { theme } from "../../styles/theme";

export default function Hero() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: "url('/hero/hero2.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          color: "white",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
            }}
          >
            Leaders building leaders.
          </Typography>
          <Typography
            variant="body1"
            sx={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)" }}
          >
            The home for Cebu's mSME leaders.
          </Typography>
          <Button variant="contained" className="bg-primary mb-5">
            Become a member
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.secondary.main,
          color: "white",
          padding: "1.5rem",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontStyle: "italic",
            marginBottom: "0.5rem",
          }}
        >
          #businessGrowthTogether
        </Typography>
        <Typography variant="body2">
          Based in Cebu, our organization is more than a business club—it's a
          vibrant platform for collaboration and growth. We unite small to
          medium enterprises (SMEs), fueling a powerful force for economic
          development. Our mission is to empower these local businesses by
          providing resources and fostering an environment where experiences are
          shared, and learning is mutual.
        </Typography>
      </Box>
    </Box>
  );
}
