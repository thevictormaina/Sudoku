import style from "./toggle.module.scss"
import { useState } from "react";

type ToggleProps = { text: string; }

export default function Toggle({ text }: ToggleProps) {
    let [toggleStyle, setToggleStyle] = useState(style.toggleOff)

    function handleClick(){
        if(toggleStyle === style.toggleOff){
            setToggleStyle(style.toggleOn)
        } else setToggleStyle(style.toggleOff);
    }

    return (
        <div className={style.toggleWrapper}>
            <div onClick={handleClick} className={toggleStyle}>
                <div className={style.switch}></div>
            </div>
            <div className="text">{text}</div>
        </div>
    )
}
