export type ContainerStyle = {
    direction?: "column" | "row"
    alignItems?: "center" | "flex-start" | "flex-end" | "stretch"
    alignContent?: "center" | "flex-start" | "flex-end" | "stretch"
    justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly"
    backgroundColor?: string
    border?: string
    borderRadius?: string
    padding?: string
    margin?: string
    width?: string
    maxWidth?: string
    height?: string
    flexWrap?: "wrap" | "nowrap"
    flexBasis?: string
    flexGrow?: string
    position?: "sticky" | "absolute" | "relative" | "fixed" | "static" | "inherit" | "initial" | "unset"
    top?: string | number
    bottom?: string
    textAlign?: "center" | "left" | "right"
}

type props = {
    children: React.ReactNode
    style? : ContainerStyle
} 

export function Container(props: props) {
    const { 
        children,
        style
    } = props;

    return (
        <div style={{
            display: "flex",
            flexDirection: style?.direction || "column",
            alignItems: style?.alignItems || "center",
            alignContent: style?.alignContent || "center",
            justifyContent: style?.justifyContent || "center",
            width: style?.width,
            maxWidth: style?.maxWidth,
            height: style?.height,
            backgroundColor: style?.backgroundColor,
            border: style?.border,
            borderRadius: style?.borderRadius,
            padding: style?.padding,
            margin: style?.margin,
            flexWrap: style?.flexWrap || "nowrap",
            flexBasis: style?.flexBasis || "auto",
            flexGrow: style?.flexGrow || "0",
            position: style?.position,
            top: style?.top,
            bottom: style?.bottom,
            textAlign: style?.textAlign,
        }}>
            {children}
        </div>
    )
}