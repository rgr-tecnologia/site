import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import { BigData } from "@/components/sections/BigData";
import { ConsultoriaProjetos } from "@/components/sections/ConsultoriaProjetos";
import { FabricaSoftware } from "@/components/sections/FabricaSoftware";
import { NossoDNA } from "@/components/sections/NossoDNA";
import { ServiceManagement } from "@/components/sections/ServiceManagement";
import { Box, Grid } from "@mui/material";

type pageSection = {
  id: string;
  title: string | null;
  content: JSX.Element;
  style?: React.CSSProperties;
};

const pageSections: pageSection[] = [
  {
    id: "section-dna",
    title: "Nosso DNA",
    content: <NossoDNA />,
  },
  {
    id: "section-servicos",
    title: "Serviços",
    content: <ServiceManagement />,
    style: {
      backgroundColor: "#FEF7F7",
    },
  },
  {
    id: "section-consultoria",
    title: "Consultoria e Projetos",
    content: <ConsultoriaProjetos />,
  },
  {
    id: "section-fabrica",
    title: "Fábrica de Software",
    content: <FabricaSoftware />,
    style: {
      backgroundColor: "#FEF7F7",
    },
  },
  {
    id: "section-bigData",
    title: "BI e Big Data",
    content: <BigData />,
  },
];

export default function Page() {
  return (
    <>
      <Box
        width={"100%"}
        display={{
          xs: "none",
          sm: "block",
        }}
        position={"relative"}
        sx={{
          position: "relative",
          aspectRatio: "1920/350",
        }}
      >
        <Banner />
      </Box>

      {pageSections.map((pageSection: pageSection, index: number) => {
        return (
          <Grid
            container
            key={`section-${index}`}
            id={pageSection.id}
            style={pageSection.style}
            direction={"column"}
            paddingY={4}
          >
            <Grid container item justifyContent={"center"} paddingBottom={4}>
              {pageSection.title && <SectionTitle text={pageSection.title} />}
            </Grid>
            <Grid container item justifyContent={"center"}>
              {pageSection.content}
            </Grid>
          </Grid>
        );
      })}
    </>
  );
}
