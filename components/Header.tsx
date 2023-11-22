"use client";

import Link from "next/link";
import Logo from "./Logo";
import { CSSProperties, useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type linkOption = {
  label: string;
  href: string;
};
type linkOptions = linkOption[];

const linkOptions: linkOptions = [
  { label: "Nosso DNA", href: "#section-dna" },
  { label: "Service Management", href: "#section-servicos" },
  { label: "Consultoria e Projetos", href: "#section-consultoria" },
  { label: "Fábrica de Software", href: "#section-fabrica" },
  { label: "BI e Big Data", href: "#section-bigData" },
];

const linkStyle: CSSProperties = {
  color: "#000",
  textDecoration: "none",
  fontWeight: "bold",
};

const NavOptions = () => {
  return (
    <>
      {linkOptions.map((linkOption, index) => {
        return (
          <Link href={linkOption.href} key={`nav-${index}`} style={linkStyle}>
            {linkOption.label}
          </Link>
        );
      })}
    </>
  );
};

const DrawerOptions = () => {
  return (
    <List>
      {linkOptions.map((linkOption, index) => (
        <ListItem key={`nav-${index}`} sx={{ textAlign: "center" }}>
          <Link href={linkOption.href} style={linkStyle}>
            {linkOption.label}
          </Link>
        </ListItem>
      ))}
    </List>
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
          <Grid item xs={4} sm={1}>
            <Box
              width={"100%"}
              height={"100%"}
              position={"relative"}
              maxWidth={120}
              maxHeight={40}
              sx={{
                position: "relative",
                aspectRatio: "2381/794",
              }}
            >
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
        <nav>
          <Drawer
            variant="temporary"
            open={isMenuOpen}
            onClose={handleCloseNavMenu}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            <Container
              style={{
                padding: "1rem",
              }}
            >
              <Box
                width={"100%"}
                height={"100%"}
                position={"relative"}
                maxWidth={120}
                maxHeight={40}
                sx={{
                  position: "relative",
                  aspectRatio: "2381/794",
                }}
              >
                <Logo />
              </Box>
            </Container>
            <Divider />
            <DrawerOptions />
          </Drawer>
        </nav>
      </Container>
    </AppBar>
  );
}
