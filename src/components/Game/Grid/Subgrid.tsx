import { CellValue } from "../../../interfaces/CellState"
import { SubgridState } from "../../../interfaces/SubgridState"
import { range } from "../../../services/utils"
import Cell from "./Cell"
import style from "./subgrid.module.scss"
import { useState } from "react"

interface SubgridProps extends SubgridState {}

export default function Subgrid({ subgrid, subgridIndex }: SubgridProps) {
    return (
        <div className={style.subgrid}>
            {subgrid.map((cell) => (
                <Cell cell={cell} subgridIndex={subgridIndex} />
            ))}
        </div>
    )
}
