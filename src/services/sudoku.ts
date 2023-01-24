import { CellPosition, CellValue } from "../interfaces/CellState"
import { SudokuGrid } from "../interfaces/GameState"
import { randomGenerator } from "./utils"

export function createEmptyGrid(gridSize: number): SudokuGrid {
    let grid: SudokuGrid = []

    for (let i = 0; i < gridSize; i++) {
        let row: CellValue[] = []
        for (let j = 0; j < gridSize; j++) {
            row.push(0)
        }
        grid.push(row)
    }

    return grid
}

export function validateSubgrid(
    value: CellValue,
    cellPosition: CellPosition,
    grid: SudokuGrid
): boolean {
    const sqrtGridSize = Math.sqrt(grid.length)
    const { row, col } = cellPosition
    const rowStart = row - (row % sqrtGridSize)
    const colStart = col - (col % sqrtGridSize)

    for (let i = 0; i < sqrtGridSize; i++) {
        for (let j = 0; j < sqrtGridSize; j++) {
            if (grid[rowStart + i][colStart + j] === value) return false
        }
    }
    return true
}

export function validateRow(
    value: CellValue,
    cellPosition: CellPosition,
    grid: SudokuGrid
): boolean {
    const gridSize = grid.length
    const { row } = cellPosition

    for (let col = 0; col < gridSize; col++) {
        if (grid[row][col] === value) return false
    }

    return true
}

export function validateCol(
    value: CellValue,
    cellPosition: CellPosition,
    grid: SudokuGrid
): boolean {
    const gridSize = grid.length
    const { col } = cellPosition

    for (let row = 0; row < gridSize; row++) {
        if (grid[row][col] === value) return false
    }
    return true
}

export function isSafe(
    value: CellValue,
    cellPosition: CellPosition,
    grid: SudokuGrid
): boolean {
    const validators = [
        validateSubgrid(value, cellPosition, grid),
        validateRow(value, cellPosition, grid),
        validateCol(value, cellPosition, grid),
    ]

    return validators.every((validator) => validator)
}

export function fillSubgrid(
    cellPosition: CellPosition,
    grid: SudokuGrid
): SudokuGrid {
    const gridSize = grid.length
    const sqrtGridSize = Math.sqrt(gridSize)
    const { row, col } = cellPosition

    for (let i = 0; i < sqrtGridSize; i++) {
        for (let j = 0; j < sqrtGridSize; j++) {
            while (true) {
                let num = randomGenerator(gridSize)
                if (validateSubgrid(num, cellPosition, grid)) {
                    grid[row + i][col + j] = num
                    break
                }
            }
        }
    }

    return grid
}

export function fillDiagonalSubgrids(grid: SudokuGrid): SudokuGrid {
    const gridSize = grid.length
    const sqrtGridSize = Math.sqrt(grid.length)

    for (let i = 0; i < gridSize; i += sqrtGridSize) {
        fillSubgrid({ row: i, col: i }, grid)
    }

    return grid
}

export function fillRemaining(
    cellPosition: CellPosition,
    grid: SudokuGrid
): SudokuGrid {
    let newGrid = [...grid]
    const gridSize = newGrid.length
    const { row, col } = cellPosition

    function fillGrid(row: number, col: number): boolean {
        // Check for end of grid
        if (row === gridSize - 1 && col === gridSize) {
            return true
        }

        // Move to the next row
        if (col === gridSize) {
            row += 1
            col = 0
        }

        // Skip filled cells
        if (newGrid[row][col] !== 0) {
            return fillGrid(row, col + 1)
        }

        // Check if current cell is valid and fill it
        for (let num = 1; num <= gridSize; num++) {
            if (isSafe(num, cellPosition, newGrid)) {
                newGrid[row][col] = num

                if (fillGrid(row, col + 1)) return true

                newGrid[row][col] = 0
            }
        }

        return false
    }

    fillGrid(row, col)

    return newGrid
}

export function generateCompleteGrid(gridSize: number): SudokuGrid {
    const emptyGrid = createEmptyGrid(gridSize)
    const sqrtGridSize = Math.sqrt(gridSize)
    const diagonalGrid = fillDiagonalSubgrids(emptyGrid)
    const completeGrid = fillRemaining(
        { row: 0, col: sqrtGridSize },
        diagonalGrid
    )

    return completeGrid
}

export function unsolveGrid(grid: SudokuGrid, emptyCells: number) {
    let gridSize = grid.length
    let count = emptyCells
    let unsolvedGrid = grid

    while (count !== 0) {
        let i = randomGenerator(gridSize) - 1
        let j = randomGenerator(gridSize) - 1

        if (unsolvedGrid[i][j] !== 0) {
            count -= 1
            unsolvedGrid[i][j] = 0
        }
    }

    return unsolvedGrid
}
