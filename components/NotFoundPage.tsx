"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

function ConsoleLine({ text, className, listItem = false }: { text: string, className?: string, listItem?: boolean }) {
    const classNameString = `text-[#89f4ba] font-mono text-2xl my-0 ${className}`;
    return (
        listItem
            ? <li className={`list-none before:content-["*"] before:absolute before:-left-6 ${classNameString}`}>{text}</li>
            : <p className={classNameString}>{text}</p>
    );
}


export default function NotFoundPage() {
    const router = useRouter();

    useEffect(() => {
        const handleNavigation = (event: MouseEvent | KeyboardEvent) => {
            if ((event instanceof KeyboardEvent && event.key === "Enter") || (event instanceof MouseEvent)) {
                router.push("/");
            }
        };

        document.addEventListener("click", handleNavigation);
        document.addEventListener("keydown", handleNavigation);

        return () => {
            document.removeEventListener("click", handleNavigation);
            document.removeEventListener("keydown", handleNavigation);
        };
    }, [router]);

    return (
        <main className="absolute top-0 left-0 z-20 w-full h-full flex bg-sky-900">
            <section className="w-full big:w-1/2 m-auto flex flex-col">
                <p className="p-2 mx-auto bg-[#89f4ba] text-blue-800 font-mono text-2xl">ERR404: Application Not Found</p>
                <div className="mx-auto flex flex-col">
                    <ConsoleLine text={"Application or URL does not exist"} />
                    <ConsoleLine text={"Possible reasons:"} />
                    <ul className="relative p-0 m-0">
                        <ConsoleLine text={"You got an invalid link"} listItem />
                        <ConsoleLine text={"You made a typo"} listItem />
                    </ul>
                    <ConsoleLine className="hidden big:block ml-auto" text={"Press ENTER to reboot"} />
                    <ConsoleLine className="block big:hidden ml-auto" text={"Tap to reboot"} />
                </div>
            </section>
        </main>
    )
}