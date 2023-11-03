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
            padding: "1rem",
            position: 'sticky',
            top: 0,
            maxWidth: "100%",
            alignItems: "center",
        }}>
            <Container style={{
                direction: "row",
                width: "100%",
                justifyContent: "space-between",
            }}>
                <Container>
                    <Logo />
                </Container>
                <Container
                    style={{
                        width: "100%",
                    }}>
                    <nav
                        style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            fontWeight: "bold",
                            color: "#000",
                            width: "100%",
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
        </Container>
    )
}