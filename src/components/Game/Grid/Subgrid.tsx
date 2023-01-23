import { range } from "../../../utils"
import Cell from "./Cell"
import style from "./subgrid.module.scss"

interface SubgridProps {
    subgridIndex: number
}

export default function Subgrid({ subgridIndex }: SubgridProps) {
    let cells = range(9).map((num, i) => (
        <Cell key={i} value={num - 1} subgridIndex={subgridIndex} />
    ))

    return <div className={style.subgrid}>{cells}</div>
}
