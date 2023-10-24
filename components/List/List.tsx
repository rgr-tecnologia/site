type Style = {
    color?: string;
    margin?: string;
    padding?: string;
    fontWeight?: string;
    fontSize?: string;
}

type ListItem = {
    text: string;
}

type props = {
    items: ListItem[];
    type?: "ordered" | "unordered";
    style?: Style;
}

export function List(props: props) {
    const { 
        items, 
        type = 'ordered',
        style
    } = props;

    let itemsList: JSX.Element[] = items.map((item: ListItem, index: number) => {
        return <li 
            style={{
                color: style?.color,
                margin: style?.margin || "0",
                padding: style?.padding || "0.25rem 0",
                fontWeight: style?.fontWeight || "normal",
                fontSize: style?.fontSize || "1rem"
            
            }}
            key={`list-item-${index}`}>
                {item.text}
            </li>
    });

    if(type === 'ordered') {
        return <ol>{itemsList}</ol>
    }
    else {
        return <ul>{itemsList}</ul>
    }
}