import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import Overlay from '@/components/Overlay'
import Section from '@/components/Section'
import SectionTitle from '@/components/SectionTitle'
import { BigData } from '@/components/sections/BigData'
import { ConsultoriaProjetos } from '@/components/sections/ConsultoriaProjetos'
import { Contato } from '@/components/sections/Contato'
import { FabricaSoftware } from '@/components/sections/FabricaSoftware'
import { NossoDNA } from '@/components/sections/NossoDNA'
import { ServiceManagement } from '@/components/sections/ServiceManagement'

type pageSection = {
    id: string,
    title: string | null,
    content: JSX.Element,
    style?: React.CSSProperties
}

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
      backgroundColor: "#FEF7F7"
    }
  },
  {
    id: "section-consultoria",
    title: "Consultoria & Projetos",
    content: <ConsultoriaProjetos />
  },
  {
    id: "section-fabrica",
    title: "Fábrica de Software",
    content: <FabricaSoftware />,
    style: {
      backgroundColor: "#FEF7F7"
    }
  },
  {
    id: "section-bigData",
    title: "BI & Big Data",
    content: <BigData />
  },
  {
    id: "section-contato",
    title: null,
    content: <Contato />
  }
]

export default function Home() {
  return (
   <Overlay>
    <Header />
    <Banner />
    {pageSections.map((pageSection: pageSection, index: number) => {
      return (
        <Section 
          id={pageSection.id}
          key={`section-${index}`}
          style={{
            padding: "2rem",
            ...pageSection.style
          }}>
          <div>{pageSection.title && <SectionTitle text={pageSection.title} />}</div>
          {pageSection.content}
        </Section>
      )
    })}
    <Footer />  
   </Overlay>
  )
}
