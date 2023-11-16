import { Text } from "../Text/Text";
import BannerSVG from "../../public/banner.svg";
import Image from "next/image";
import { Container, Grid } from "@mui/material";

const text = [
  `Trabalhamos no limite da transformação, inovação, flexibilidade e adaptação Tecnológica.`,

  `Atuamos em todo território nacional provendo serviços em Tecnologia.
  Entendemos que o foco da RGR precisa estar concentrado em nossos colaboradores diretos e indiretos, 
  mantendo todos satisfeitos e proporcionando qualidade de vida justa. 
  Somente assim conseguiremos prover um serviço de qualidade aos nossos clientes/parceiros, 
  além de manter um excelente ambiente de trabalho dentro da RGR.`,

  `Oferecemos aos nossos parceiros uma equipe qualificada, certificada e altamente motivada para condução e execução de nossos projetos e serviços.`,

  `Atuamos na fronteira do conhecimento, desenvolvendo ou absorvendo novas tecnologias que agregam diferencial competitivo aos nossos parceiros.
  Experiência no desenvolvimento projetos ágeis e tradicionais, realizados em nossas unidades ou no local do cliente.`,
];

export function NossoDNA() {
  return (
    <Container>
      <Grid
        container
        direction={{
          xs: "column",
          md: "row",
        }}
        spacing={4}
      >
        <Grid item container direction={"column"} xs={6} textAlign={"justify"}>
          {text.map((paragraph: string, index: number) => {
            return (
              <Text
                key={`paragraph-${index}`}
                text={paragraph}
                style={{
                  margin: "1rem 0",
                }}
              />
            );
          })}
        </Grid>
        <Grid item xs={6}>
          <Container>
            <Image
              objectFit="cover"
              src={BannerSVG}
              alt="Nosso DNA"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
