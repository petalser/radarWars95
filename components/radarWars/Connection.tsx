import RadarVisual from "../icons/RadarVisual"
import Introduction from "./introduction/Introduction"

export default function Connection({ connected }: { connected: boolean }) {
    return (
        <div className="min-w-[35dvw] flex items-center" >
            <Introduction className="w-1/2 p-4" connected={connected} />
            <RadarVisual className="size-1/2 p-4" />
        </div>
    )
}