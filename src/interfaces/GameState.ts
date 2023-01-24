import { CellPosition, CellValue } from "./CellState"

export type SudokuGrid = CellValue[][]

export interface GameState {
    gridSize: number
    sqrtGridSize: (gridSize: number) => number
    unsolvedGrid: SudokuGrid
    completeGrid: SudokuGrid
    timeElapsed: number // number of seconds
    selectedCell: CellPosition
    numberOfMistakes: number
    useNotes: boolean
    isPlaying: boolean
    isPaused: boolean
}
