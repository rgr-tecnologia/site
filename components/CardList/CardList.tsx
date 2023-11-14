import { List, ListItem } from "@mui/material";

type ListItem = {
  text: string;
};

type props = {
  items: ListItem[];
};

export function CardList(props: props) {
  const { items } = props;

  let itemsList: JSX.Element[] = items.map((item: ListItem, index: number) => (
    <ListItem key={`list-item-${index}`}>{item.text}</ListItem>
  ));

  return (
    <List
      style={{
        fontSize: "0.875rem",
        fontWeight: "600",
      }}
    >
      {itemsList}
    </List>
  );
}
