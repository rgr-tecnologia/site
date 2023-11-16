import { Container, Grid, Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#EA1F29",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      <Container>
        <Grid container spacing={2} paddingY={2} textAlign={"center"}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              Rua Enxovia 472 - Sala 905 - Edifício Neo Corporate Office (Zona
              Sul) - São Paulo/SP - CEP 04711-030
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              © Copyright 2023 - RGR. All Right Reserved
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
