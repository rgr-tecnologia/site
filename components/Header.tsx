import Link from "next/link";
import Logo from "./Logo";
import { CSSProperties } from "react";
import { Container } from "./Container/Container";

type navOption = {
    label: string,
    href: string,
}
type navOptions = navOption[] 

const navOptions: navOptions = [
    { label: "Nosso DNA", href: "#section-dna" },
    { label: "Service Management", href: "#section-servicos" },
    { label: "Consultoria e Projetos", href: "#section-consultoria" },
    { label: "Fábrica de Software", href: "#section-fabrica" },
    { label: "BI e Big Data", href: "#section-bigData" },
]

const navLinkStyle: CSSProperties = {
    
}

export function Header() {
    return (
        <Container style={{
            backgroundColor: "#fff",
            direction: "row",
            padding: "1rem",
            position: 'sticky',
            top: 0,
            margin: "0 auto",
            maxWidth: "100%"
        }}>
            <Container
                style={{
                    flexBasis: "20%",
                    margin: "0 2rem"
                }}>
                <Logo />
            </Container>
            <Container
                style={{
                    flexBasis: "80%",
                    margin: "0 2rem"
                }}>
                <nav
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        fontWeight: "bold",
                        color: "#000",                      
                    }}>
                    {navOptions.map((navOption: navOption, index: number) => {
                        return (
                            <Link 
                                href={navOption.href} 
                                key={`nav-${index}`}
                                style={navLinkStyle}>
                                {navOption.label}
                            </Link>
                        )
                    })}
                </nav>
            </Container>
        </Container>
    )
}