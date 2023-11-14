import Link from "next/link";
import Image from "next/image";
import IconUpSVG from "../public/icon-up.svg";

export default function AnchorBack() {
  return (
    <Link
      href="#"
      style={{
        backgroundColor: "#fff",
        position: "fixed",
        top: `calc(100vh - 256px)`,
        left: `calc(100vw - 96px)`,
        borderRadius: "100%",
        width: "3rem",
        height: "3rem",
      }}
    >
      <Image
        src={IconUpSVG}
        alt="Botão voltar para o topo"
        style={{
          width: "3rem",
          height: "3rem",
        }}
      />
    </Link>
  );
}
