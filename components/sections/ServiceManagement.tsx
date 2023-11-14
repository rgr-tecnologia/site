import Image from "next/image";
import { CardList } from "../CardList/CardList";
import { Text } from "../Text/Text";
import bars from "@/public/icons/bars.svg";
import check from "@/public/icons/check.svg";
import deviceDesktop from "@/public/icons/device-desktop.svg";
import deviceWatch from "@/public/icons/device-watch.svg";
import { Card, CardContent, Container, Grid } from "@mui/material";

type Service = {
  title: string;
  serviceList: string[];
  icon: string;
};

const services: Service[] = [
  {
    icon: deviceDesktop,
    title: "Network Operation Center (NOC)",
    serviceList: [
      "Equipe especializada em monitoramento de ativos de TI",
      "Monitoramento e gestão: Redes LAN, WAN, Servidores Desktop, Mobile, Switches, Firewalls, Storage.",
      "Ferramentas de gestão de chamados e gestão de suporte junto à operadora de rede WAN",
      "Monitoramento 24x7x365",
      "Disaster Recovery Plan (DRP)",
    ],
  },
  {
    icon: deviceWatch,
    title: "Processos pré-definidos",
    serviceList: [
      "Processos bem definidos para rápida implantação",
      "Processos 100% compliance ITIL",
      "Gestão de TI - Cobit",
      "Gestão de Qualidade e Indicadores",
    ],
  },
  {
    icon: check,
    title: "Infraestrutura Física",
    serviceList: [
      "Cabeamento estruturado",
      "Montagem/Desmontagem de Racks",
      "Controle de acessos CFTV",
      "Sistemas Elétricos, No-breaks e Estabilizadores",
      "Infraestrutura de Data Center",
    ],
  },
  {
    icon: bars,
    title: "Field Services",
    serviceList: [
      "Atendimento Território Nacional",
      "Suporte N1, N2 e N3",
      "Equipe On-site ou Remota",
    ],
  },
];

export function ServiceManagement() {
  return (
    <Container>
      <Grid container spacing={2} direction={"row"}>
        {services.map((service: Service, index: number) => {
          return (
            <Grid
              container
              item
              key={index}
              direction={"column"}
              xs={6}
              spacing={1}
            >
              <Grid
                container
                item
                direction={"row"}
                justifyContent={"center"}
                spacing={1}
              >
                <Grid item>
                  <Image src={service.icon} alt={service.title} />
                </Grid>
                <Grid item>
                  <Text
                    style={{
                      margin: "1rem 0",
                      color: "#EA1F29",
                      fontWeight: "bold",
                      fontSize: "1.25rem",
                    }}
                    text={service.title}
                  />
                </Grid>
              </Grid>
              <Grid item height={"80%"}>
                <Card
                  style={{
                    height: "100%",
                    border: ".09rem solid #EA1F29",
                    boxShadow: "none",
                  }}
                >
                  <CardContent>
                    <CardList
                      items={service.serviceList.map((serviceItem) => ({
                        text: serviceItem,
                      }))}
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
