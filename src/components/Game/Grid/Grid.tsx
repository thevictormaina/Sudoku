import style from "./grid.module.scss"
import Subgrid from "./Subgrid"
import { range } from "../../../services/utils"

export default function Grid() {
    let subgrids = range(9).map((_, i) => <Subgrid key={i} subgridIndex={i}/>)

    return (
        <section className={style.outerWrapper}>
            <div className={style.innerWrapper}>{subgrids}</div>
        </section>
    )
}
