import { CellPosition, CellState, CellValue } from "../interfaces/CellState"
import { SudokuGrid } from "../interfaces/GameState"

export function getSubgrid(
    cellPosition: CellPosition,
    grid: SudokuGrid
): CellState[] {
    let subgrid: CellState[] = []
    const sqrtGridSize = Math.sqrt(grid.length)
    const { row, col } = cellPosition
    const rowStart = row - (row % sqrtGridSize)
    const colStart = col - (col % sqrtGridSize)



    for (let i = 0; i < sqrtGridSize; i++) {
        for (let j = 0; j < sqrtGridSize; j++) {
            const cellDetails: CellState = {
                cellPosition: { row: rowStart + i, col: colStart + j },
                value: grid[rowStart + i][colStart + j],
                isPrefilled: grid[rowStart + i][colStart + j] !== null,
                isValid: grid[rowStart + i][colStart + j] !== null && undefined,
                notes: []
            }

            subgrid.push(cellDetails)
        }
    }

    return subgrid
}

export function getAllSubgrids(grid: SudokuGrid): CellState[][] {
    let gridSize = grid.length
    let subgrids: CellState[][] = []

    for(let i = 0; i < gridSize; i+=3){
        for(let j = 0; j < gridSize; j += 3){
            subgrids.push(getSubgrid({ row: i, col: j }, grid))
        }
    }

    return subgrids
}
