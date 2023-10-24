import { createElement } from "react"

type style = {
    color?: string
    margin?: string
    padding?: string
    fontWeight?: string
    fontSize?: string
}

type props = {
    text: string
    variant?: "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    style?: style
}

export function Text(props: props) {
    const { 
        text,
        variant = "span"
    } = props;

    const DynamicTag = `${variant}`;

    return createElement(DynamicTag, {
        style: {
            color: props.style?.color,
            margin: props.style?.margin || "0",
            padding: props.style?.padding || "0",
            fontWeight: props.style?.fontWeight || "normal",
            fontSize: props.style?.fontSize || "1rem",
        }
    }, text)
}