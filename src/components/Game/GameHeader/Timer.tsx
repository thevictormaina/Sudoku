import { Icon } from "@iconify/react"
import style from "./timer.module.scss"
import { useState } from "react"

export default function Timer() {
    let [paused, setPaused] = useState(false)

    function handleClick() {
        setPaused(!paused)
    }

    let classNames: string[] = [
        paused ? "button-purple" : "button-purple-outline",
        style.timer,
    ]

    return (
        <button onClick={handleClick} className={classNames.join(" ")}>
            {/* Add timer text inside this span */}
            <span>08:35</span>
            {paused ? (
                <Icon icon="material-symbols:play-arrow-rounded" />
            ) : (
                <Icon icon="ic:round-pause" />
            )}
        </button>
    )
}
