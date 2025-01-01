import dynamic from "next/dynamic";
import { Cursor } from "@react95/core";

export type IconType = keyof typeof import('@react95/icons');
type IconVariant = '32x32_4' | '16x16_4';

type DesktopIconProps = {
    text: string;
    icon: IconType;
    variant?: IconVariant;
};

export default function DesktopIcon({ text, icon, variant = '32x32_4' }: DesktopIconProps) {
    const Icon = dynamic(() =>
        import('@react95/icons').then(mod => mod[icon] as React.ComponentType<{
            variant: IconVariant, className: string

        }>)
    );

    return (
        <div className={`size-16 ${Cursor.Pointer} border border-red-500 flex hover:bg-opacity-20 hover:bg-white flex-col truncate`}>
            <Icon variant={variant} className="mx-auto mt-1" />
            <br />
            <p className="mx-auto my-0 p-0 text-white">{text}</p>
        </div>
    );
}
