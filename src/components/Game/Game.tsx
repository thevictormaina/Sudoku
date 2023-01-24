import { useState } from "react"
import { GameState } from "../../interfaces/GameState"
import { generateCompleteGrid, unsolveGrid } from "../../services/sudoku"
import Control from "./Control/Control"
import style from "./game.module.scss"
import GameHeader from "./GameHeader/GameHeader"
import Grid from "./Grid/Grid"

export default function Game() {
    const completeGrid = generateCompleteGrid(9)
    const unsolvedGrid = unsolveGrid(completeGrid, 30)

    const [gameState, setGameState] = useState<GameState>({
        completeGrid: completeGrid,
        unsolvedGrid: unsolvedGrid,
        timeElapsed: 0,
        selectedCell: null,
        numberOfMistakes: 0,
        useNotes: false,
        isPlaying: false,
        isPaused: false,
    })

    return (
        <section className={style.container}>
            <h2 hidden>Sudoku Game</h2>
            <GameHeader />
            <main>
                <Grid gameState={gameState} />
                <Control />
            </main>
        </section>
    )
}
