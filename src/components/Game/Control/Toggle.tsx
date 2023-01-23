import style from "./toggle.module.scss"
import { useState } from "react"

type ToggleProps = { text: string }

export default function Toggle({ text }: ToggleProps) {
    let [toggle, setToggle] = useState(false)

    function handleClick() {
        setToggle(!toggle)
    }

    return (
        <div className={style.toggleWrapper}>
            <div
                onClick={handleClick}
                className={toggle ? style.on : style.off}
            ></div>
            <div className="text">{text}</div>
        </div>
    )
}
