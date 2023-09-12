import Image from "next/image";
import Hero from "./components/hero/Hero";
import { Box } from "@mui/material";
import Benefits from "./components/benefits/benefits";
import Companies from "./components/companies/Companies";

export default function Home() {
  return (
    <Box>
      <Hero />
      <Benefits />
      <Companies />
    </Box>
  );
}
