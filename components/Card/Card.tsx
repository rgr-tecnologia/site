import { Container, ContainerStyle } from "../Container/Container";

type props = {
    children: React.ReactNode
    style? : ContainerStyle
}

export function Card(props: props) {
    const { 
        children,
        style 
    } = props;
    return (
        <Container                             
            style={{
                backgroundColor: "#fff",
                border: "0.125rem solid #F69D9D",
                borderRadius: "1rem",
                padding: "2rem 4rem",
                alignItems: "flex-start",
                width: "100%",
                height: "100%",
                ...style
            }}>
                {children}
        </Container>
    )
}