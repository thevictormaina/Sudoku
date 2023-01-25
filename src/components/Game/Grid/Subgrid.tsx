import { CellPosition, CellValue } from "../../../interfaces/CellState"
import { SubgridState } from "../../../interfaces/SubgridState"
import { range } from "../../../services/utils"
import Cell from "./Cell"
import style from "./subgrid.module.scss"
import { useState } from "react"
import { getCellKey } from "../../../services/cell"

interface SubgridProps extends SubgridState {
    selectedCell: CellPosition | null
    handleSelectCell: (cellPosition: CellPosition | null) => void
}

export default function Subgrid({ subgrid, subgridIndex, selectedCell, handleSelectCell }: SubgridProps) {
    return (
        <div className={style.subgrid}>
            {subgrid.map((cell) => (
                <Cell
                    key={getCellKey(cell.cellPosition)}
                    cellDetails={cell}
                    subgridIndex={subgridIndex}
                    selectCell={handleSelectCell}
                    selectedCell={selectedCell}
                />
            ))}
        </div>
    )
}
