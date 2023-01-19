import { CSSProperties } from "react"
import logo from "../assets/logo.svg"
import style from "../styles/modules/header.module.scss"

export default function Header() {
    return (
        <header className={style.header}>
            <div>
                <img src={logo} alt="sudoku logo" />
            </div>
            <p className="text-gray-2 bold">
                A classic game to challenge your mind
            </p>
        </header>
    )
}
