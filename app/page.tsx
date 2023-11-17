import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Overlay from "@/components/Overlay";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { BigData } from "@/components/sections/BigData";
import { ConsultoriaProjetos } from "@/components/sections/ConsultoriaProjetos";
import { FabricaSoftware } from "@/components/sections/FabricaSoftware";
import { NossoDNA } from "@/components/sections/NossoDNA";
import { ServiceManagement } from "@/components/sections/ServiceManagement";
import { Box } from "@mui/material";

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
    title: "Consultoria & Projetos",
    content: <></>,
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
    title: "BI & Big Data",
    content: <BigData />,
  },
];

export default function Home() {
  return (
    <Overlay>
      <Header />
      <Box
        width={"100%"}
        height={{
          xs: 128,
          sm: 400,
          md: 500,
          lg: 600,
          xl: 700,
        }}
        maxHeight={1459}
        position={"relative"}
      >
        <Banner />
      </Box>
      {pageSections.map((pageSection: pageSection, index: number) => {
        return (
          <Section
            id={pageSection.id}
            key={`section-${index}`}
            style={{
              padding: "1.5rem",
              ...pageSection.style,
            }}
          >
            <div>
              {pageSection.title && <SectionTitle text={pageSection.title} />}
            </div>
            {pageSection.content}
          </Section>
        );
      })}
      <Footer />
    </Overlay>
  );
}
