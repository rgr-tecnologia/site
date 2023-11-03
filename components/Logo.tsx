import Image from "next/image";
import LogoSVG from "../public/logo.png";

export default function Logo() {
    return (
        <Image
            src={LogoSVG}
            alt="Logo RGR"
            style={{
                width: '108px',
                height: '46px',
            }}
        />
    )
}