import Image from "next/image";
import ImageSVG from "../../public/consultoria-projetos.svg";
import { Card, CardContent, Grid, Typography, Box } from "@mui/material";

type ConsultoriaProjetos = {
  title: string;
  content: string;
};

function ConsultoriaProjetosCard(props: ConsultoriaProjetos) {
  const { title, content } = props;

  return (
    <Card
      style={{
        border: ".09rem solid #F69D9D",
        width: "100%",
        height: "100%",
      }}
    >
      <CardContent>
        <Grid container spacing={2}>
          <Grid container item justifyContent={"center"}>
            <Typography variant="h6" fontWeight={"bold"} color={"primary"}>
              {title}
            </Typography>
          </Grid>
          <Grid container item justifyContent={"center"} textAlign={"center"}>
            <Typography variant="body2" color={"#696969"} fontSize={"0.875rem"}>
              {content}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export function ConsultoriaProjetos() {
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"space-evenly"}
      spacing={{
        xs: 4,
        sm: 6,
      }}
      paddingX={{
        xs: 1.5,
        sm: 0,
      }}
    >
      <Grid
        container
        item
        alignItems={"center"}
        justifyContent={"space-evenly"}
        direction={{
          xs: "column",
          sm: "row",
        }}
        spacing={{
          xs: 4,
          sm: 0,
        }}
      >
        <Grid container item sm={4}>
          <ConsultoriaProjetosCard
            title="Análise e Planejamento"
            content="Análise do escopo e estimativa de horas e recursos para projetos."
          />
        </Grid>
        <Grid container item sm={4}>
          <ConsultoriaProjetosCard
            title="Gerenciamento de Custos"
            content="Estimativa de custos, levantamento de horas, distribuição de atividades e acompanhamento dos resultados."
          />
        </Grid>
      </Grid>
      <Grid
        container
        item
        alignItems={"center"}
        justifyContent={"space-evenly"}
        direction={{
          xs: "column",
          sm: "row",
        }}
        spacing={{
          xs: 4,
          sm: 0,
        }}
      >
        <Grid container item sm={4}>
          <ConsultoriaProjetosCard
            title="Bodyshop"
            content="Alocação parcial ou Full time de recursos para execução de atividades, serviços e projetos."
          />
        </Grid>
        <Grid
          container
          item
          sm={3}
          alignItems={"center"}
          justifyContent={"center"}
          display={{ xs: "none", sm: "flex" }}
        >
          <Box>
            <Image src={ImageSVG} alt="Imagem central" />
          </Box>
        </Grid>
        <Grid container item sm={4}>
          <ConsultoriaProjetosCard
            title="Agilidade na Entrega"
            content="Metodologia ágil e compromisso das equipes na entrega das demandas dos projetos."
          />
        </Grid>
      </Grid>
      <Grid
        container
        item
        alignItems={"center"}
        justifyContent={"space-evenly"}
        direction={{
          xs: "column",
          sm: "row",
        }}
        spacing={{
          xs: 4,
          sm: 0,
        }}
      >
        <Grid container item sm={4} justifyContent={"center"}>
          <ConsultoriaProjetosCard
            title="Moving de Data Center"
            content={`
            A RGR Tecnologia possui amplo conhecimento em Moving de Datacenter e Microinformática com diversos case de sucesso, capaz de mitigar os riscos de mudanças críticas.`}
          />
        </Grid>
        <Grid container item sm={4} justifyContent={"center"}>
          <ConsultoriaProjetosCard
            title="Segurança da Informação"
            content="Temos uma equipe especializada e certificada pronta para implementar, gerir e auditar ambiente tecnológicos."
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
