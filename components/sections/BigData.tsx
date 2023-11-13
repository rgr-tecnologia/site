import { Container } from "../Container/Container";
import { Text } from "../Text/Text";

const textTitle = `Crie um mecanismo de análises práticas e relatórios gerenciais.`;

const sectionText = [
  `Conforme você considera suas necessidades de dados e informações, entenda e defina a abordagem certa para uma estratégia de infraestrutura integrada e otimizada que suporte a obtenção, a consolidação, o gerenciamento, a proteção, o entendimento e a apresentação de informações alinhadas aos negócios.`,

  `Os nossos consultores de big data e análise vão avaliar seus sistemas e definir as capacidades necessárias para transformar a sua iniciativa de dados e análises em um sucesso. O nosso portfólio de tecnologias e parcerias ajudarão você a operacionalizar a análise de dados e promover o avanço de sua empresa.`,

  `Torne os dados tangíveis para sua empresa usando nossa solução inovadora de infraestrutura de big data, software e serviços. Com a RGR, você pode definir estratégias holísticas de dados, unificar dados novos e legados, adaptar-se às necessidades conforme elas forem surgindo e usar pools de dados relevantes para embasar personalização, previsões e monetização.`,
];

export function BigData() {
  return (
    <Container
      style={{
        margin: "3rem 0",
        maxWidth: "768px",
      }}
    >
      <Container
        style={{
          textAlign: "center",
        }}
      >
        <Text
          text={textTitle}
          style={{
            fontWeight: "bold",
          }}
        />
      </Container>
      <Container
        style={{
          flexBasis: "50%",
          margin: "3rem auto",
        }}
      >
        {sectionText.map((text: string, index: number) => {
          return (
            <Text
              text={text}
              key={`section-text-${index}`}
              style={{
                margin: "1rem 0",
              }}
            />
          );
        })}
      </Container>
    </Container>
  );
}
