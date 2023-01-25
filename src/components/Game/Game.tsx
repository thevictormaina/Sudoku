import { useState } from "react"
import { CellPosition } from "../../interfaces/CellState"
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
        usingNotes: false,
        isPlaying: false,
        isPaused: false,
    })

    function handleSelectCell(cellPosition: CellPosition | null) {
        setGameState({ ...gameState, selectedCell: cellPosition })
    }

    function handleUseNotes() {
        setGameState({ ...gameState, usingNotes: !gameState.usingNotes })
    }

    return (
        <section className={style.container}>
            <h2 hidden>Sudoku Game</h2>
            <GameHeader />
            <main>
                <Grid
                    unsolvedGrid={gameState.unsolvedGrid}
                    handleSelectCell={handleSelectCell}
                    selectedCell={gameState.selectedCell}
                />
                <Control
                    useNotes={handleUseNotes}
                    usingNotes={gameState.usingNotes}
                />
            </main>
        </section>
    )
}
