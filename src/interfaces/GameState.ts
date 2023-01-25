import { CellPosition, CellValue } from "./CellState"

export type SudokuGrid = CellValue[][]

export interface GameState {
    // gridSize: number
    // sqrtGridSize: number
    unsolvedGrid: SudokuGrid
    completeGrid: SudokuGrid
    timeElapsed: number // number of seconds
    selectedCell: CellPosition | null
    numberOfMistakes: number
    usingNotes: boolean
    isPlaying: boolean
    isPaused: boolean
}
