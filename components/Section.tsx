import { CSSProperties, PropsWithChildren } from "react";
import { Grid } from "@mui/material";

type Props = {
  id?: string;
  style?: CSSProperties;
} & PropsWithChildren;

export default function Section({ id, children, style }: Props) {
  return (
    <Grid
      container
      direction={"column"}
      alignItems={"center"}
      sx={{
        backgroundColor: "#fff",
        ...style,
      }}
      id={id}
    >
      {children}
    </Grid>
  );
}
