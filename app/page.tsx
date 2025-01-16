import DesktopIcon from "@/components/DesktopIcon";
import { Desk100 } from "@react95/icons";
import { IconRadar } from "@/components/icons/IconRadar";

const desktopIcons = [
  {
    text: "Desktop",
    icon: Desk100
  },
  {
    text: "Radar Wars",
    icon: IconRadar,
    url: "/radar-wars"
  },
]

export default function Home() {
  return (
    <>
      {desktopIcons.map((item, index) => {
        return <DesktopIcon text={item.text} url={item.url} key={index} >
          <item.icon className="mx-auto mt-1" />
        </DesktopIcon>
      })}
    </>
  )
}