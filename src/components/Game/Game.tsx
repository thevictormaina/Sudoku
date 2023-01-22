import style from "./game.module.scss"
import GameHeader from "./GameHeader/GameHeader"
import Grid from "./Grid/Grid"
import Control from "./Control/Control"

export default function Game() {
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
