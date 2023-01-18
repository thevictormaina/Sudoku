class Sudoku {
    constructor(gridSize) {
        this.gridSize = gridSize
        this.sqrtGrid = Math.sqrt(gridSize)
        this.grid = this.createEmptyGrid(gridSize)
    }

    unsolved = undefined;
    
    createEmptyGrid(gridSize) {
        let grid = []
        for (let i = 0; i < gridSize; i++) {
            let row = []
            for (let j = 0; j < gridSize; j++) {
                row.push(0)
            }
            grid.push(row)
        }

        return grid;
    }

    randomGenerator(max){
        return Math.ceil(Math.random() * max)
    }

    fillGrid() {
        this.fillDiagonalSubgrids()
        this.fillRemaining(0, this.sqrtGrid)

        return this.grid;
    }

    validateSubgrid(num, rowStart, colStart) {
        for (let i = 0; i < this.sqrtGrid; i++) {
            for (let j = 0; j < this.sqrtGrid; j++) {
                if (this.grid[rowStart + i][colStart + j] === num) return false;
            }
        }
        return true;
    }

    validateRow(num, row) {
        for (let col = 0; col < this.gridSize; col++) {
            if (this.grid[row][col] === num) return false;
        }
        return true;
    }

    validateCol(num, col) {
        for (let row = 0; row < this.gridSize; row++) {
            if (this.grid[row][col] === num) return false;
        }
        return true
    }

    isSafe(num, row, col) {
        let validators = [
            this.validateSubgrid(num, row - (row % this.sqrtGrid), col - (col % this.sqrtGrid)),
            this.validateRow(num, row),
            this.validateCol(num, col)
        ]

        return validators.every(validator => validator)
    }

    fillDiagonalSubgrids() {
        for (let i = 0; i < this.gridSize; i += this.sqrtGrid) {
            this.fillSubgrid(i, i)
        }
        return this.grid
    }

    fillSubgrid(row, col) {
        for (let i = 0; i < this.sqrtGrid; i++) {
            for (let j = 0; j < this.sqrtGrid; j++) {
                while (true) {
                    let num = this.randomGenerator(this.gridSize)
                    if (this.validateSubgrid(num, row, col)) {
                        this.grid[row + i][col + j] = num;
                        break;
                    }
                }
            }
        }

        return this.grid
    }

    fillRemaining(row, col) {
        // Check for end of grid
        if (row === this.gridSize - 1 && col === this.gridSize) {
            return true
        }

        // Move to the next row
        if (col === this.gridSize) {
            row += 1;
            col = 0;
        }

        // Skip filled cells
        if (this.grid[row][col] !== 0) {
            return this.fillRemaining(row, col + 1)
        }

        // Check if current cell is valid and fill it
        for (let num = 1; num <= this.gridSize; num++) {
            if (this.isSafe(num, row, col)) {
                this.grid[row][col] = num
                if (this.fillRemaining(row, col + 1)) return true;
                this.grid[row][col] = 0;
            }
        }

        return false;
    }

    removeDigits(emptyCells){
        let count = emptyCells;
        this.unsolved = this.grid

        while(count !== 0){
            let i = this.randomGenerator(this.gridSize) - 1
            let j = this.randomGenerator(this.gridSize) - 1

            if(this.unsolved[i][j] !== 0){
                count -= 1;
                this.unsolved[i][j] = 0
            }
        }

        return this.unsolved
    }
}