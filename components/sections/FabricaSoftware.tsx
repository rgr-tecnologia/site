import { Text } from "../Text/Text";
import Image from "next/image";
import { Container, Grid, Box } from "@mui/material";

const textTitle = `Todos nossos profissionais são capacitados com a visão de Arquiteturas e domínio de metodologias de desenvolvimento, 
além de fazerem uso das melhores práticas em ampla gama de ferramentas e linguagens.`;

const sectionText = [
  `Atuamos com as tecnologias destacadas, mas também estamos preparados para assumir demandas rapidamente em outras linguagens, 
    para isso contamos com um banco de currículo e um processo para rápida absorção de novos profissionais.`,

  `Utilizamos metodologia própria de desenvolvimento cobrindo todo o processo, desde o levantamento de requisitos até a entrega de cada versão ou release, 
    mas também estamos preparados para atuar segundo as metodologias criadas ou já adotadas por nossos clientes, 
    com a mesma disciplina e atenção a suas determinações e padrões.`,

  `Gestão de Projetos End-to-End; fábrica de software com metodologia Ágil, 
    Waterfall ou absorvendo o modelo do cliente; Gestão de configuração e mudança; Suporte e manutenção de sistemas legados.`,
];

export function FabricaSoftware() {
  return (
    <Container>
      <Grid container direction={"column"} spacing={4}>
        <Grid
          item
          container
          textAlign={{
            xs: "justify",
            sm: "center",
          }}
          xs={1}
        >
          <Text
            text={textTitle}
            style={{
              fontWeight: "bold",
            }}
          />
        </Grid>
        <Grid
          item
          container
          direction={{
            xs: "column",
            md: "row",
          }}
          xs={11}
          spacing={4}
        >
          <Grid
            container
            item
            xs={6}
            textAlign={"justify"}
            direction={"column"}
            spacing={2}
          >
            {sectionText.map((text: string, index: number) => {
              return (
                <Grid item key={`section-text-${index}`}>
                  <Text text={text} />
                </Grid>
              );
            })}
          </Grid>
          <Grid xs={6} item>
            <Box width={"100%"} height={"100%"} position={"relative"}>
              <Image unoptimized src={"/thumb-2.png"} alt="Nosso DNA" fill />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
