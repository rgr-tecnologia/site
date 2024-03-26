import { Box, Container, Grid, Typography } from "@mui/material";
import { SocialMediaLinks } from "./SocialMediaLinks";

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#EA1F29",
        color: "#fff",
        width: "100%",
      }}
    >
      <Container>
        <Grid
          container
          direction={{
            xs: "column",
            sm: "row",
          }}
          paddingY={2}
        >
          <Grid
            item
            container
            spacing={2}
            textAlign={"justify"}
            direction={"column"}
            xs={8}
            sm={6}
          >
            <Grid item>
              <Typography variant="body2">
                Rua Enxovia 472 - 8° andar - Edifício Neo Corporate Office (Zona
                Sul) - São Paulo/SP - CEP 04711-030
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                © Copyright 2023 - RGR. All Right Reserved
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent={{
              xs: "center",
              sm: "flex-end",
            }}
            alignItems={"center"}
            xs={4}
            sm={6}
            color={"#fff"}
          >
            <Box>
              <SocialMediaLinks />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
