import Image from "next/image";
import LogoSVG from "../public/logo.svg";

export default function Logo() {
    return (
        <Image
            src={LogoSVG}
            alt="Logo RGR"
        />
    )
}