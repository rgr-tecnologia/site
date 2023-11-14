import Image from "next/image";
import { Container } from "../Container/Container";
import ImageSVG from "../../public/consultoria-projetos.svg";
import { Text } from "../Text/Text";
import { Card } from "../Card/Card";

type ConsultoriaProjetos = {
  title: string;
  content: string;
};

function ConsultoriaProjetosCard(props: ConsultoriaProjetos) {
  const { title, content } = props;

  return (
    <Card
      style={{
        padding: "1rem",
        alignItems: "center",
        textAlign: "center",
        flexBasis: "35%",
      }}
    >
      <Container
        style={{
          padding: "0 0 1rem 0",
        }}
      >
        <Text
          style={{
            color: "#EA1F29",
            fontWeight: "bold",
          }}
          text={title}
        />
      </Container>
      <Container>
        <Text
          style={{
            fontSize: "0.875rem",
          }}
          text={content}
        />
      </Container>
    </Card>
  );
}

export function ConsultoriaProjetos() {
  return (
    <Container>
      <Container
        style={{
          margin: "2rem 0 4rem 0",
          maxWidth: "1280px",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
          }}
          text={`A RGR conta com equipe de Gerenciamento de Projetos altamente qualificada.`}
        />
      </Container>

      <Container
        style={{
          direction: "row",
          justifyContent: "space-evenly",
        }}
      >
        <ConsultoriaProjetosCard
          title="Análise e Planejamento"
          content="Análise do escopo e estimativa de horas e recursos para projetos."
        />
        <ConsultoriaProjetosCard
          title="Gerenciamento de Custos"
          content="Estimativa de custos, levantamento de horas, distribuição de atividades e acompanhamento dos resultados."
        />
      </Container>

      <Container
        style={{
          direction: "row",
          justifyContent: "space-evenly",
          margin: "4rem 0",
        }}
      >
        <Container>
          <ConsultoriaProjetosCard
            title="Bodyshop"
            content="Alocação parcial ou Full time de recursos para execução de atividades, serviços e projetos."
          />
        </Container>

        <Container
          style={{
            margin: "0 2rem",
          }}
        >
          <Image src={ImageSVG} alt="Imagem central" />
        </Container>

        <Container>
          <ConsultoriaProjetosCard
            title="Agilidade na Entrega"
            content="Metodologia ágil e compromisso das equipes na entrega das demandas dos projetos."
          />
        </Container>
      </Container>

      <Container
        style={{
          direction: "row",
          justifyContent: "space-evenly",
        }}
      >
        <ConsultoriaProjetosCard
          title="Moving de Data Center"
          content="A RGR possui amplo conhecimento em Moving de Datacenter e Microinformática com diversos case de sucesso, capaz de mitigar os riscos de mudanças críticas."
        />
        <ConsultoriaProjetosCard
          title="Segurança da Informação"
          content="Temos uma equipe especializada e certificada pronta para implementar, gerir e auditar ambiente tecnológicos."
        />
      </Container>
    </Container>
  );
}
