import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Box,
} from "@mui/material";
import benefits from "./benefits.json";

export default function Benefits() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        marginY: 3,
      }}
    >
      <Divider sx={{ marginBottom: 3 }} />
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Why Join Us?
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Tailored Support to Inspire Growth and Foster Success in Your
        Enterprise.
      </Typography>
      {benefits.map((benefit) => {
        return (
          <Card key={benefit.id} sx={{ maxWidth: 345, marginBottom: 3 }}>
            <CardMedia
              sx={{ height: 200 }}
              image={`/benefits/${benefit.photo}`}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {benefit.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {benefit.description}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Container>
  );
}
