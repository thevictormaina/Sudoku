import style from "./cell.module.scss";
import { PropsWithChildren, useState } from "react"
import Subgird from "./Subgrid"

interface CellProps extends PropsWithChildren {
    value: number
    subgridIndex: number
}

export default function Cell({ value, subgridIndex }: CellProps) {
    // let [classes, setClasses] = useState([]);

    let classes: string[] = [
        style.unselected,
        // style.selected,
        subgridIndex % 2 !== 0 ? style.secondary : "",
        // style.error,
        // style.userfilled
    ]

    return <div className={classes.join(" ")}>{value}</div>
}
