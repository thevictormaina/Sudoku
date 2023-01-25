import style from "./control.module.scss"
import Numpad from "./Numpad"
import Toggle from "./Toggle"
import Button from "../../Button/Button"

interface ControlProps {
    usingNotes: boolean
    useNotes: () => void
}

export default function Control({ usingNotes, useNotes }: ControlProps) {
    return (
        <aside className={style.control}>
            <Numpad />
            <Toggle
                setToggle={useNotes}
                isToggled={usingNotes}
                text="Use notes"
            />
            <footer className={style.footer}>
                <Button
                    text="Restart Game"
                    icon="codicon:debug-restart"
                    type="button"
                    className="button-purple-outline"
                />
                <Button text="New Game" icon="ri:play-line" type="button" />
            </footer>
        </aside>
    )
}
