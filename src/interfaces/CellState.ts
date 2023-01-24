export type CellValue = number | undefined

export interface CellPosition {
    row: number
    col: number
    subgrid?: number
}

export interface CellState {
    cellPosition: CellPosition
    value: CellValue
    isPrefilled: boolean
    isValid: boolean
    notes: CellValue[]
}