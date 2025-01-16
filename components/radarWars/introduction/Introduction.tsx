import { Button, Input } from "@react95/core"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { socket } from "@/config/socket"

type IntroductionProps = {
    className?: string;
    connected: boolean;
}

export default function Introduction({ className, connected }: IntroductionProps) {
    const [chosenName, setChosenName] = useState<string>("")
    const [usernames, setUsenames] = useState<string[]>([])
    const [isCookiesAccepted, setCookiesAccepted] = useState<boolean>(false)

    useEffect(() => {
        const users = Cookies.get("usrnms")?.split("; ")
        if (users?.length) {
            setCookiesAccepted(true)
            setUsenames(users)
        }
        console.log(users)
    }, [])

    function handleChoice(name: string) {
        setChosenName(name)
    }

    function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setChosenName("")
        const updatedUsernames = new Set([...usernames, chosenName])
        if (isCookiesAccepted) {
            Cookies.set("usrnms", [...updatedUsernames].join("; "))
        }
        socket.emit("joinRoom", ({ room: "lobby", name: chosenName }))
    }

    return (
        <section className={`flex ${className}`}>
            <div className="m-auto">
                <h1>Welcome to Radar wars</h1>
                <p>Please, introduce yourself</p>
                <form onSubmit={handleFormSubmit}>
                    <label className="flex flex-col">
                        Enter your name
                        <Input value={chosenName} onChange={e => setChosenName(e.target.value)} />
                    </label>
                    {usernames.length > 0 ? (
                        <div className="flex flex-col" >
                            <p className="mb-0">or select previous:</p>
                            {usernames.map((username) => (
                                <label key={username}>
                                    <input
                                        type="radio"
                                        name="name"
                                        value={username}
                                        checked={chosenName === username}
                                        onChange={() => handleChoice(username)}
                                    />
                                    {username}
                                </label>
                            ))}
                        </div>
                    ) : (
                        <>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={isCookiesAccepted}
                                    onChange={(e) => setCookiesAccepted(e.target.checked)}
                                />
                                Accept cookies (optional)
                            </label>
                        </>
                    )}
                    <div className="flex justify-between">
                        <p>{connected ? "Server connected" : "Server not connected"}</p>
                        <Button type="submit" disabled={!chosenName || !connected}>Submit</Button>
                    </div>
                </form>
            </div>

        </section>
    )
}