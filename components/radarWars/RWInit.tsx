"use client"
import Window from "../Window"
import { useState, useEffect } from "react"
import { socket } from "@/config/socket"
import Connection from "./Connection"

type RWInitProps = {
    prevUrl?: string;
}

type socketStatus = "connection" | "connected"

export default function RWInit({ prevUrl }: RWInitProps) {
    const [status, setStatus] = useState<socketStatus>("connection")

    useEffect(() => {
        if (socket.connected) setStatus("connected")
    }, [])

    useEffect(() => {
        socket.on("statusChange", (newStatus) => {
            setStatus(newStatus);
            console.log(newStatus, ">>")
        });

        return () => {
            socket.off("statusChange");
        };
    }, [status]);

    return (
        <Window prevUrl={prevUrl} title="Radar Wars">
            {status === "connection" || status === "connected" && <Connection connected={status === "connected"} />}
        </Window>
    )
}
