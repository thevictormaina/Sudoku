import style from "./cell.module.scss";
import { PropsWithChildren, useState } from "react"
import Subgird from "./Subgrid"
import { CellState, CellValue } from "../../../interfaces/CellState";

interface CellProps extends PropsWithChildren {
    cell: CellState
    subgridIndex: number
}

export default function Cell({ cell, subgridIndex }: CellProps) {
    // let [classes, setClasses] = useState([]);

    let classes: string[] = [
        style.unselected,
        // style.selected,
        subgridIndex % 2 !== 0 ? style.secondary : "",
        // style.error,
        // style.userfilled
    ]

    return <div className={classes.join(" ")}>{cell.value}</div>
}
