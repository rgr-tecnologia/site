import { Card } from "../Card/Card";
import { Container } from "../Container/Container";
import { List } from "../List/List";
import { Text } from "../Text/Text";

type Service = {
    title: string;
    serviceList: string[];
}

const services: Service[] = [
    {
        title: "Network Operation Center (NOC)",
        serviceList: [
            "Equipe especializada em monitoramento de ativos de TI",
            "Monitoramento e gestão: Redes LAN, WAN, Servidores Desktop, Mobile, Switches, Firewalls, Storage.",
            "Ferramentas de gestão de chamados e gestão de suporte junto à operadora de rede WAN",
            "Monitoramento 24x7x365",
            "Disaster Recovery Plan (DRP)",
        ]
    },
    {
        title: "Processos pré-definidos",
        serviceList: [
            "Processos bem definidos para rápida implantação",
            "Processos 100% compliance ITIL",
            "Gestão de TI - Cobit",
            "Gestão de Qualidade e Indicadores",
        ]
    },
    {
        title: "Infraestrutura Física",
        serviceList: [
            "Cabeamento estruturado",
            "Montagem/Desmontagem de Racks",
            "Controle de acessos CFTV",
            "Sistemas Elétricos, No-breaks e Estabilizadores",
            "Infraestrutura de Data Center",
        ]
    },
    {
        title: "Field Services",
        serviceList: [
            "Atendimento Território Nacional",
            "Suporte N1, N2 e N3",
            "Equipe On-site ou Remota"
        ]
    }
]

export function ServiceManagement() {
    return (
        <Container style={{
            direction: "row",
            alignItems: "stretch",
            flexWrap: "wrap",
        }}>
            {
                services.map((service: Service, index: number) => {
                    return (
                        <Container
                            style={{
                                margin: "1rem",
                                width: "47%"
                            }}
                            key={index}>
                            <Text style={{
                                margin: "1rem 0",
                                color: "#EA1F29",
                                fontWeight: "bold",
                                fontSize: "1.25rem"
                            }}
                            text={service.title}/>
                            <Card>
                                <List 
                                    style={{
                                        fontSize: "0.875rem",
                                        fontWeight: '600'
                                    }}
                                    items={service.serviceList.map (serviceItem => ({ text: serviceItem }))} />
                            </Card>
                        </Container>
                    )
                })
            }
        </Container>
    )
}