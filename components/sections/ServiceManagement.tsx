import Image from "next/image";
import { CardList } from "../CardList/CardList";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import WatchIcon from "@mui/icons-material/Watch";
import CheckIcon from "@mui/icons-material/Check";
import ComputerIcon from "@mui/icons-material/Computer";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

type Service = {
  title: string;
  serviceList: string[];
  icon: JSX.Element;
};

const services: Service[] = [
  {
    icon: <ComputerIcon />,
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
    icon: <WatchIcon />,
    title: "Processos pré-definidos",
    serviceList: [
      "Processos bem definidos para rápida implantação",
      "Processos 100% compliance ITIL",
      "Gestão de TI - Cobit",
      "Gestão de Qualidade e Indicadores",
    ],
  },
  {
    icon: <CheckIcon />,
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
    icon: <SignalCellularAltIcon />,
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
      <Grid
        container
        spacing={2}
        direction={{
          xs: "column",
          md: "row",
        }}
      >
        {services.map((service: Service, index: number) => {
          return (
            <Grid
              container
              item
              key={index}
              direction={"column"}
              xs={12}
              sm={6}
              spacing={1}
            >
              <Grid item container direction={"row"} spacing={1}>
                <Grid item>{service.icon}</Grid>
                <Grid item>
                  <Typography
                    color={"primary"}
                    fontWeight={"bold"}
                    variant="h6"
                  >
                    {service.title}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs>
                <Card
                  style={{
                    width: "100%",
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
