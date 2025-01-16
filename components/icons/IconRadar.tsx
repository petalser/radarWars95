import Image from "next/image"
import "../../public/images/RadarIcon.png"

export function IconRadar({ className }: { className?: string }) {
    return <Image
        src="/images/RadarIcon.png"
        alt="radar icon"
        width="36"
        height="36"
        className={`${className}`}
    />
}