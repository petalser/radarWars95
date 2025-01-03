"use client";
import { useState } from "react";
import { Cursor } from "@react95/core";
import { cursorTo } from "readline";

export function StickyNote() {
    const [isNoteVisible, setNoteVisibility] = useState(true);

    const handleClick = () => setNoteVisibility(false);

    return isNoteVisible ? (
        <button
            onClick={handleClick}
            className={`${Cursor.Pointer} flex justify-center items-center absolute bottom-12 md:bottom-auto md:top-10 right-14 bg-yellow-400 w-44 h-44 rotate-12`}
        >
            <p className="p-5 text-center text-2xl leading-none font-caveat text-blue-950 -rotate-[31deg]">
                For better experience, use fullscreen mode
                <br />
                F11 to toggle
            </p>
        </button>
    ) : null;
}
