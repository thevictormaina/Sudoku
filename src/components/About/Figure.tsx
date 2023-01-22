import style from "./figure.module.scss"
import Link from "../Link/Link"
import { PropsWithChildren } from "react"

interface FigureProps extends PropsWithChildren {
    src: string
    alt?: string
}

export default function Figure(props: FigureProps) {
    return (
        <figure className={style.figure}>
            <div className={style.imageWrapper}>
                <img src={props.src} alt={props.alt} />
            </div>
            <figcaption className={style.figcaption}>
                {props.children}
            </figcaption>
        </figure>
    )
}
