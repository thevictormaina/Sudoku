export interface ICellState {}

export default interface IGameState {
    // grid: Grid
    timeElapsed: string
    selectedCell: string
    numberOfMistakes: string
    solvedGrid: Array<number[]>
    unsolvedGrid: Array<number | undefined []>
    useNotes: boolean
    isPlaying: boolean
    isPaused: boolean
}
