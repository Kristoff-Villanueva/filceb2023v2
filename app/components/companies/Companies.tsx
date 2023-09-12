import Marquee from "react-fast-marquee";
import { Container, Divider, Paper, Typography } from "@mui/material";
import Image from "next/image";
import companies from "./companies.json";

export default function Companies() {
  return (
    <Container>
      <Divider sx={{ marginY: 2 }} />
      <Paper>
        <Typography variant="h5" sx={{ textAlign: "center", paddingY: 2 }}>
          Our Member Companies
        </Typography>
        <Marquee speed={30}>
          {companies.map((company) => (
            <div
              className="p-5 flex items-center h-28 lg:py-20"
              key={company.id}
            >
              <Image
                src={`/companies/${company.photo}`}
                alt={company.photo}
                width={100}
                height={100}
              />
            </div>
          ))}
        </Marquee>
      </Paper>
    </Container>
  );
}
