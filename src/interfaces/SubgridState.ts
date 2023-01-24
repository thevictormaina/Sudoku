import { CellState, CellValue } from "./CellState"

export interface SubgridState {
    subgridIndex: number
    subgrid: CellState[]
}