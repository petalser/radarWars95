"use client"
import { Modal, TitleBar } from "@react95/core"
import { useRouter } from "next/navigation"
import { ReactNode } from "react"

type RWInitProps = {
    children: ReactNode
    prevUrl?: string;
    title?: string
}

export default function Window({ children, prevUrl, title }: RWInitProps) {
    const router = useRouter()

    const defaultPosition = prevUrl ? { x: 0, y: 0 } : { x: 60, y: 60 }

    function handleClose() {
        if (prevUrl) { router.push(prevUrl, {}) } else { router.back() }
    }

    return (
        //@ts-expect-error unknown error
        <Modal
            className={`${prevUrl ? "size-[100dvw]" : ""}`}
            style={{ top: 0, left: 0 }}
            title={title}
            titleBarOptions={[
                <TitleBar.Close key="close" onClick={handleClose} style={{ paddingInline: "0" }} />
            ]}
            dragOptions={{ defaultPosition }}
        >
            {children}
        </Modal>
    )
}
