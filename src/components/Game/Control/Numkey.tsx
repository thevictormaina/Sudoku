import style from "./numpad.module.scss"

type NumkeyProps = { number: number }

export default function Numkey({ number }: NumkeyProps) {
    return <button type="button" className={style.numkey}>{number}</button>
}
