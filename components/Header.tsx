"use client";

import Link from "next/link";
import Logo from "./Logo";
import { CSSProperties, useState } from "react";
import { AppBar, Box, Container, Grid, IconButton, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type navOption = {
  label: string;
  href: string;
};
type navOptions = navOption[];

const navOptions: navOptions = [
  { label: "Nosso DNA", href: "#section-dna" },
  { label: "Service Management", href: "#section-servicos" },
  { label: "Consultoria e Projetos", href: "#section-consultoria" },
  { label: "Fábrica de Software", href: "#section-fabrica" },
  { label: "BI e Big Data", href: "#section-bigData" },
];

const navLinkStyle: CSSProperties = {
  color: "#000",
  textDecoration: "none",
  fontWeight: "bold",
};

const NavOptions = () => {
  return (
    <>
      {navOptions.map((navOption: navOption, index: number) => {
        return (
          <Link href={navOption.href} key={`nav-${index}`} style={navLinkStyle}>
            {navOption.label}
          </Link>
        );
      })}
    </>
  );
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenNavMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseNavMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <AppBar
      style={{
        backgroundColor: "#fff",
      }}
      position="sticky"
    >
      <Container>
        <Grid
          container
          paddingY={2}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Grid item xs={2} sm={1}>
            <Box width={"100%"} height={"100%"} position={"relative"}>
              <Logo />
            </Box>
          </Grid>
          <Grid
            item
            container
            xs={0}
            sm={11}
            justifyContent={"space-around"}
            alignItems={"center"}
            display={{ xs: "none", sm: "flex" }}
          >
            <NavOptions />
          </Grid>
          <Grid
            item
            container
            xs={1}
            sm={0}
            display={{ xs: "flex", sm: "none" }}
            justifyContent={"center"}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon style={{ color: "#aaa" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
