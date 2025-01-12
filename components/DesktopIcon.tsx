import { Cursor } from "@react95/core";
import Link from "next/link";

type DesktopIconProps = {
    text: string;
    url?: string;
    children: React.ReactNode;
};

export default function DesktopIcon({ text, children, url = "/404" }: DesktopIconProps) {
    return (
        <Link href={url} className={`size-16 ${Cursor.Pointer} border border-red-500 flex hover:bg-opacity-20 hover:bg-white flex-col truncate`}>
            {children}
            <br />
            <p className="mx-auto my-0 p-0 text-white">{text}</p>
        </Link>
    );
}
