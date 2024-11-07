import { Container, Grid, Typography } from "@mui/material";
import { ContactForm } from "../ContactForm";

const textTitle = `Crie um mecanismo de análises práticas e relatórios gerenciais.`;

const sectionText = [
  `Conforme você considera suas necessidades de dados e informações, entenda e defina a abordagem certa para uma estratégia de infraestrutura integrada e otimizada que suporte a obtenção, a consolidação, o gerenciamento, a proteção, o entendimento e a apresentação de informações alinhadas aos negócios.`,

  `Os nossos consultores de big data e análise vão avaliar seus sistemas e definir as capacidades necessárias para transformar a sua iniciativa de dados e análises em um sucesso. O nosso portfólio de tecnologias e parcerias ajudarão você a operacionalizar a análise de dados e promover o avanço de sua empresa.`,

  `Torne os dados tangíveis para sua empresa usando nossa solução inovadora de infraestrutura de big data, software e serviços. Com a RGR, você pode definir estratégias holísticas de dados, unificar dados novos e legados, adaptar-se às necessidades conforme elas forem surgindo e usar pools de dados relevantes para embasar personalização, previsões e monetização.`,
];

export function BigData() {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid container item justifyContent={"center"} textAlign={"center"}>
          <Typography
            style={{
              fontWeight: "bold",
            }}
          >
            {textTitle}
          </Typography>
        </Grid>
        <Grid container item direction={"column"} spacing={6}>
          <Grid item container spacing={2} textAlign={"justify"}>
            {sectionText.map((text: string, index: number) => {
              return (
                <Grid item key={`section-text-${index}`}>
                  <Typography>{text}</Typography>
                </Grid>
              );
            })}
          </Grid>
          <Grid
            container
            item
            direction={{
              xs: "column",
              md: "row",
            }}
            spacing={4}
          >
            <Grid container item sm={12} direction={"column"} spacing={4}>
              <Grid item textAlign={"justify"}>
                <Typography variant="h5" fontWeight={"bold"}>
                  A RGR trabalha constantemente na evolução de seus serviços e
                  processos para garantir a satisfação dos nossos clientes
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  Entre em contato conosco através dos contatos{" "}
                  <a
                    style={{
                      color: "blue",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                    href="mailto:rh@rgrtecnologia.com.br"
                  >
                    rh@rgrtecnologia.com.br
                  </a>{" "}
                  ou{" "}
                  <a
                    style={{
                      color: "blue",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                    href="mailto:suporte@rgrtecnologia.com.br"
                  >
                    suporte@rgrtecnologia.com.br
                  </a>{" "}
                  para auxiliarmos em sua dúvida, solicitação ou suporte. Estamos
                  ansiosos para te ouvir e ajudar no que for necessário!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
