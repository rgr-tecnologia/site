import { Container } from "../Container/Container";
import { Text } from "../Text/Text";
import Image from "next/image";
import BannerSVG from "../../public/banner.svg";

const textTitle = `Todos nossos profissionais são capacitados com a visão de Arquiteturas e domínio de metodologias de desenvolvimento, 
além de fazerem uso das melhores práticas em ampla gama de ferramentas e linguagens.`

const sectionText = [
    `Atuamos com as tecnologias destacadas, mas também estamos preparados para assumir demandas rapidamente em outras linguagens, 
    para isso contamos com um banco de currículo e um processo para rápida absorção de novos profissionais.`,

    `Utilizamos metodologia própria de desenvolvimento cobrindo todo o processo, desde o levantamento de requisitos até a entrega de cada versão ou release, 
    mas também estamos preparados para atuar segundo as metodologias criadas ou já adotadas por nossos clientes, 
    com a mesma disciplina e atenção a suas determinações e padrões.`,

    `Gestão de Projetos End-to-End; fábrica de software com metodologia Ágil, 
    Waterfall ou absorvendo o modelo do cliente; Gestão de configuração e mudança; Suporte e manutenção de sistemas legados.`
]


export function FabricaSoftware() {
    return (
        <Container 
            style={{
                margin: "4rem 0"
            }}>
            <Container
                style={{
                    textAlign: "center",
                }}>
                <Text 
                    text={textTitle} 
                    style={{
                        fontWeight: "bold"
                    }}/>
            </Container>
            <Container style={{
                direction: "row", 
                margin: "4rem 0"           
            }}>
                <Container
                    style={{
                        flexBasis: "50%",
                        margin: "0 1rem 0 0"
                    }}>
                    {sectionText.map((text: string, index: number) => {
                        return <Text 
                            text={text}
                            key={`section-text-${index}`}
                            style={{
                                margin: "1rem 0"
                            }}/>
                    
                    })}
                </Container>
                <Container
                    style={{
                        flexBasis: "50%",
                        margin: "0 0 0 1rem"
                    }}>
                    <Image src={BannerSVG} alt="Nosso DNA" />
                </Container>
            </Container>
        </Container>
    )
}