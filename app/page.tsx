import DesktopIcon from "@/components/DesktopIcon";
import type { IconType } from "@/components/DesktopIcon";

const desktopIcons = [
  {
    text: "Desktop",
    icon: "Desk100"
  },
  {
    text: "Radar Wars",
    icon: "Wab321014"
  },
]

export default function Home() {
  return (
    <>
      {desktopIcons.map((item, index) => {
        return <DesktopIcon text={item.text} icon={item.icon as IconType} key={index} />
      })}
    </>
  )
}