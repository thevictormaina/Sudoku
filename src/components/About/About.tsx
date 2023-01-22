import style from "./about.module.scss"
import Link from "../Link/Link"

export default function AboutSection() {
    return (
        <section className={style.wrapper}>
            <article className={style.article}>
                <main>
                    <h2>What is Sudoku?</h2>
                    <p>
                        <a href="">Sudoku</a> is a logic-based number-placement puzzle game
                        that has become a popular pastime around the world. The
                        objective of the game is to fill a 9x9 grid with numbers
                        such that each row, column, and 3x3 sub-grid contains
                        all the digits from 1 to 9. The game offers a
                        challenging and mentally stimulating experience that
                        appeals to people of all ages.
                    </p>
                </main>
                <aside></aside>
            </article>
        </section>
    )
}
