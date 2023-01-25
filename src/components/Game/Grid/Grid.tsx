import { CellPosition } from "../../../interfaces/CellState"
import { SudokuGrid } from "../../../interfaces/GameState"
import { getAllSubgrids } from "../../../services/subgrid"
import style from "./grid.module.scss"
import Subgrid from "./Subgrid"

type GridProps = {
    unsolvedGrid: SudokuGrid
    selectedCell: CellPosition | null
    handleSelectCell: (cellPosition: CellPosition | null) => void
}

export default function Grid({ unsolvedGrid, selectedCell, handleSelectCell }: GridProps) {
    let subgrids = getAllSubgrids(unsolvedGrid)

    return (
        <section className={style.outerWrapper}>
            <div className={style.innerWrapper}>
                {subgrids.map((subgrid, index) => (
                    <Subgrid
                        handleSelectCell={handleSelectCell}
                        subgrid={subgrid}
                        subgridIndex={index}
                        key={index}
                        selectedCell={selectedCell}
                    />
                ))}
            </div>
        </section>
    )
}
