import style from "./cell.module.scss"
import { useState } from "react"
import {
    CellPosition,
    CellState,
    CellValue,
} from "../../../interfaces/CellState"

interface CellProps {
    cellDetails: CellState
    subgridIndex: number
    selectedCell: CellPosition | null
    selectCell: (cellPosition: CellPosition | null) => void
}

export default function Cell({
    cellDetails,
    subgridIndex,
    selectedCell,
    selectCell,
}: CellProps) {
    const { cellPosition } = cellDetails
    const { row, col } = cellPosition
    const [notes, setCellState] = useState<CellValue[]>([])

    function isSelected() {
        return (
            selectedCell && row === selectedCell.row && col === selectedCell.col
        )
    }

    function handleClick() {
        if (isSelected()) selectCell(null)
        else selectCell(cellPosition)
    }

    let classes: string[] = [
        isSelected() ? style.selected : style.unselected,

        !isSelected() && subgridIndex % 2 !== 0 ? style.secondary : "",

        !cellDetails.isPrefilled ? style.userfilled : "",

        !cellDetails.isPrefilled &&
        !cellDetails.isValid &&
        cellDetails.value !== null
            ? style.error
            : "",
    ]

    return (
        <div onClick={handleClick} className={classes.join(" ")}>
            {cellDetails.value}
        </div>
    )
}
