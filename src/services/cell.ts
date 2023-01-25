import { CellPosition, CellState } from "../interfaces/CellState";

export function CellDetails(){}

export function getCellKey(cellPosition: CellPosition){
    return `row_${cellPosition.row}_col_${cellPosition.col}`
}