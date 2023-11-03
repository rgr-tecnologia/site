import Image from "next/image"
import { Container } from "./Container/Container"

type Props = {
    text: string,
}

export default function SectionTitle({ text }: Props) {
    return (
        <Container style={{
            direction: "row"
        }}>
            <h1
                style={{
                    fontSize: "2rem",
                    textAlign: "center",
                    fontWeight: "bold",
                    borderBottom: "0.25rem solid #EA1F29",
                    paddingBottom: "1rem",
                }}>
                {text}
            </h1>
        </Container>
    )
}