import { Typography } from "@mui/material";

type Props = {
  text: string;
};

export default function SectionTitle({ text }: Props) {
  return (
    <Typography
      variant="h4"
      borderBottom={"0.25rem solid #EA1F29"}
      fontWeight={"bold"}
      textAlign={"center"}
      paddingBottom={"0.5rem"}
    >
      {text}
    </Typography>
  );
}
