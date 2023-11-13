import { Container, Grid } from "@mui/material";
import { ContactForm } from "../ContactForm";
import { Text } from "../Text/Text";

export const Contato: React.FC = () => {
  return (
    <Container>
      <Grid container direction={"column"} spacing={8}>
        <Grid
          container
          item
          xs={6}
          justifyContent={"center"}
          textAlign={"center"}
          alignItems={"center"}
        >
          <Text
            text={`A RGR trabalha constantemente na evolução de seus serviços e processos para garantir a satisfação dos nossos clientes`}
            style={{
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          />
        </Grid>
        <Grid
          container
          item
          xs={6}
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text
            text={`Entre em contato conosco para qualquer dúvida, solicitação ou suporte.`}
            style={{
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          />
          <Text
            text={
              "Estamos ansiosos para te ouvir e ajudar no que for necessário!"
            }
            style={{
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          />
        </Grid>

        <Grid container item xs={6} justifyContent={"center"}>
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  );
};
