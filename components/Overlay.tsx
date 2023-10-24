import { PropsWithChildren } from "react";
import AnchorBack from '@/components/AnchorBack'

export default function Overlay({ children }: PropsWithChildren) {
    return (
        <>
            {children}
            <AnchorBack />
        </>
    )
}