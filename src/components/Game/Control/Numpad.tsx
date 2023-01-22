import { range } from "../../../utils"
import Numkey from "./Numkey"
import style from "./numpad.module.scss"
import { Icon } from "@iconify/react"

export default function Numpad() {
    const nums: number[] = range(9)

    return (
        <div className={style.numpad}>
            {nums.map((num) => (
                <Numkey key={num} number={num} />
            ))}
            <button type="button" className={style.numkeyErase}>
                <Icon icon='bxs:eraser' />
                {/* <span>Erase</span> */}
            </button>
        </div>
    )
}
