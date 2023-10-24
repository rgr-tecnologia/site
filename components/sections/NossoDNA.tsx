import { Container } from "../Container/Container";
import { Text } from "../Text/Text";
import BannerSVG from "../../public/banner.svg";
import Image from "next/image";

const text = [
    `Trabalhamos no limite da transformação, inovação, flexibilidade e adaptação Tecnológica.`,

    `Atuamos em todo território nacional provendo serviços em Tecnologia.
    Entendemos que o foco da RGR Tecnologia precisa estar concentrado em nossos colaboradores diretos e indiretos, mantendo todos satisfeitos e proporcionando qualidade de vida justa. Somente assim conseguiremos prover um serviço de qualidade aos nossos clientes/parceiros, além de manter um excelente ambiente de trabalho dentro da RGR Tecnologia.`,

    `Oferecemos aos nossos parceiros uma equipe qualificada, certificada e altamente motivada para condução e execução de nossos projetos e serviços.`,

    `Atuamos na fronteira do conhecimento, desenvolvendo ou absorvendo novas tecnologias que agregam diferencial competitivo aos nossos parceiros.
    Experiência no desenvolvimento projetos ágeis e tradicionais, realizados em nossas unidades ou no local do cliente.`
]

export function NossoDNA() {
    return (
        <Container
            style={{
                direction: "row",
                margin: "4rem 0"
            }}>
            <Container
                style={{
                    flexBasis: "50%",
                    margin: "0 1rem 0 0"
                }}>
                {text.map((paragraph: string, index: number) => {
                    return (
                        <Text
                            key={`paragraph-${index}`}
                            text={paragraph}
                            style={{
                                margin: "1rem 0"
                            }}/>
                    )
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
    ) 
}