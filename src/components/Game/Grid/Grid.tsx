import style from "./grid.module.scss"
import Subgrid from "./Subgrid"
import { GameState, SudokuGrid } from "../../../interfaces/GameState"
import { getAllSubgrids } from "../../../services/subgrid"

type GridProps = { gameState: GameState }

export default function Grid({ gameState }: GridProps) {
    let subgrids = getAllSubgrids(gameState.unsolvedGrid)

    return (
        <section className={style.outerWrapper}>
            <div className={style.innerWrapper}>
                {subgrids.map((subgrid, index) => (
                    <Subgrid
                        subgrid={subgrid}
                        subgridIndex={index}
                        key={index}
                    />
                ))}
            </div>
        </section>
    )
}
