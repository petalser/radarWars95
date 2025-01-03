import { Cursor } from "@react95/core";


type DesktopIconProps = {
    text: string;
    children: React.ReactNode;
};

export default function DesktopIcon({ text, children, variant = '32x32_4' }: DesktopIconProps) {
    return (
        <div className={`size-16 ${Cursor.Pointer} border border-red-500 flex hover:bg-opacity-20 hover:bg-white flex-col truncate`}>
            {children}
            <br />
            <p className="mx-auto my-0 p-0 text-white">{text}</p>
        </div>
    );
}
