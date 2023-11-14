import Link from "next/link";
import Logo from "./Logo";
import { CSSProperties } from "react";
import { AppBar, Box, Container, Grid, Menu } from "@mui/material";

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

export function Header() {
  return (
    <AppBar
      style={{
        backgroundColor: "#fff",
      }}
    >
      <Container>
        <Grid container padding={2}>
          <Grid item xs={2}>
            <Logo />
          </Grid>
          <Grid
            item
            container
            xs={10}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            {navOptions.map((navOption: navOption, index: number) => {
              return (
                <Link
                  href={navOption.href}
                  key={`nav-${index}`}
                  style={navLinkStyle}
                >
                  {navOption.label}
                </Link>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}

/*
    <Container
      style={{
        backgroundColor: "#fff",
        padding: "1rem",
        position: "sticky",
        top: 0,
        maxWidth: "100%",
        alignItems: "center",
      }}
    >
      <Container
        style={{
          direction: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Container>
          <Logo />
        </Container>
        <Container
          style={{
            width: "100%",
          }}
        >
          <nav
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              fontWeight: "bold",
              color: "#000",
              width: "100%",
            }}
          >
            {navOptions.map((navOption: navOption, index: number) => {
              return (
                <Link
                  href={navOption.href}
                  key={`nav-${index}`}
                  style={navLinkStyle}
                >
                  {navOption.label}
                </Link>
              );
            })}
          </nav>
        </Container>
      </Container>
    </Container>

*/
