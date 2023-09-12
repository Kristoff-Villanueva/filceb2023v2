import { Box, Container, Typography, Button } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { theme } from "../../styles/theme";

export default function CallToAction() {
  return (
    <Container sx={{ textAlign: "center", marginTop: 5 }}>
      <Typography variant="h6">
        Ready to ignite growth for your business?
      </Typography>
      <Button variant="contained" className="bg-primary mb-5 mt-3">
        Become a member
      </Button>
    </Container>
  );
}
