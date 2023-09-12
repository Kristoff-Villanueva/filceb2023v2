"use client";

import navbar from "../navbar/navbar.json";
import { Box } from "@mui/material";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";
import { theme } from "../../styles/theme";
import { Theme } from "@mui/material/styles";

const boxStyle = (theme: Theme) => ({
  color: "white",
  backgroundColor: theme.palette.secondary.main,
  paddingTop: "1rem",
  paddingBottom: "1rem",
  marginTop: "2rem",
});

export default function Footer() {
  return (
    <Box sx={boxStyle}>
      <div className="flex flex-col items-center px-8 pt-5 lg:flex-row lg:gap-10">
        {navbar.map((item) => (
          <Link href={item.link} key={item.id} className="text-sm pb-1">
            {item.name}
          </Link>
        ))}
        <div className="pb-7 pt-5 flex flex-col items-center">
          <p>Let&apos;s connect:</p>
          <div className="pt-2 flex gap-3">
            <FacebookIcon />
            <EmailIcon />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5">
        <Image
          src="/navbar/filcebLogo.png"
          width={90}
          height={90}
          alt="FilCeb Logo"
        />
        <div className="">
          <h3 className="text-xl">FilCeb Business Club, Inc</h3>
          <p>
            Cebu, Philippines <br />
            ©2023 All Rights Reserved.
          </p>
        </div>
      </div>
    </Box>
  );
}
