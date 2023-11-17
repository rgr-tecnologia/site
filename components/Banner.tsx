import Image from "next/image";

export default function Banner() {
  return <Image src={"/banner.png"} alt="Imagem do banner" fill unoptimized />;
}
