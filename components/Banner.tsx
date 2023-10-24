import Image from 'next/image';
import BannerSVG from '../public/banner.svg';

export default function Banner() {
    return (
        <>
            <Image 
                src={BannerSVG}
                alt='Imagem do banner'
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}/>
        </>
    )
}