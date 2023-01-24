import style from "./game.module.scss"
import GameHeader from "./GameHeader/GameHeader"
import Grid from "./Grid/Grid"
import Control from "./Control/Control"
import Sudoku from "../../services/sudokuOld"
import { useState } from "react"

export default function Game() {
    const [grid, setGrid] = useState(new Sudoku(9))

    return (
        <section className={style.container}>
            <h2 hidden>Sudoku Game</h2>
            <GameHeader />
            <main>
                <Grid />
                <Control />
            </main>
        </section>
    )
}
