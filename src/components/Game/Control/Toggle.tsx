import style from "./toggle.module.scss"
import { useState } from "react"

interface ToggleProps {
    text: string
    isToggled: boolean
    setToggle: () => void
}

export default function Toggle({ text, isToggled, setToggle }: ToggleProps) {
    function handleClick() {
        setToggle()
    }

    return (
        <div className={style.toggleWrapper}>
            <div
                onClick={handleClick}
                className={isToggled ? style.on : style.off}
            ></div>
            <div className="text">{text}</div>
        </div>
    )
}
