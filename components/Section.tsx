import { CSSProperties, PropsWithChildren } from "react";

type Props = {
    id?: string,
    style?: CSSProperties,
} & PropsWithChildren

export default function Section({id, children, style }: Props) {
    return (
        <section
            id={id}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#fff",
                ...style
            }}>
            {children}
        </section>
    )
}