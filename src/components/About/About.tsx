import style from "./about.module.scss"
import Link from "../Link/Link"
import Figure from "./Figure"
import howardGarnesImage from "../../assets/howard_garnes.webp"
import makiKajiImage from "../../assets/maki_kaji.webp"

export default function AboutSection() {
    return (
        <section className={style.section}>
            <div className={style.articleWrapper}>
                <article className={style.article}>
                    <section>
                        <h2>What is Sudoku?</h2>
                        <p>
                            <Link href="https://wikipedia.com/wiki/Sudoku">
                                Sudoku
                            </Link>{" "}
                            is a logic-based number-placement puzzle game that
                            has become a popular pastime around the world. The
                            objective of the game is to fill a 9x9 grid with
                            numbers such that each row, column, and 3x3 sub-grid
                            contains all the digits from 1 to 9. The game offers
                            a challenging and mentally stimulating experience
                            that appeals to people of all ages.
                        </p>
                    </section>
                    <section>
                        <h3>History</h3>
                        <p>
                            The history of modern Sudoku can be traced back to
                            the late 1970s, when it was created by{" "}
                            <Link href="https://wikipedia.org/wiki/Howard_Garns">
                                Howard Garnes
                            </Link>
                            , an American architect and puzzle constructor.
                            Initially called “Number Place”, the game was first
                            introduced to Japan where it became widely popular
                            by a puzzle compiler named{" "}
                            <Link href="https://wikipedia.org/wiki/Maki_Kaji">
                                Maki Kaji
                            </Link>
                            .
                        </p>
                        <p>
                            Following its introduction in Japan, the popularity
                            of Sudoku spread rapidly across the world, with
                            newspapers and magazines picking up the game in the
                            following decades. In the early 2000s, with the rise
                            of the internet and electronic versions of the game,
                            Sudoku's popularity skyrocketed. This led to the
                            creation of a vast number of Sudoku puzzles and
                            variations, as well as the development of computer
                            programs for playing the game, such as this one.
                        </p>
                        <p>
                            Sudoku's appeal as a mentally stimulating game has
                            kept it relevant and popular over the years. It's
                            commonly used in educational settings to teach
                            problem-solving and logical thinking skills, and
                            Sudoku tournaments and competitions are held around
                            the world. Many people enjoy solving Sudoku puzzles
                            as a hobby, and it has become a worldwide phenomenon
                            with a dedicated fan base.
                        </p>
                    </section>
                    <section>
                        <h3>How to Play</h3>
                        <p>
                            To play Sudoku, players must fill in the empty cells
                            of a 9x9 grid with numbers between 1 and 9 such that
                            each row, column, and 3x3 sub-grid contains all the
                            digits from 1 to 9 without repetition. The game is
                            presented as a partially filled grid, with some
                            cells already containing numbers. The player must
                            use logic and deduction to figure out the correct
                            numbers for the remaining cells. Because the game is
                            designed to be challenging, players must use their
                            deduction skills to eliminate possibilities and find
                            the correct numbers.
                        </p>
                    </section>
                </article>
                <aside className={style.aside}>
                    <Figure
                        src={howardGarnesImage}
                        alt="howard garns image"
                    >
                        <Link href='https://wikipedia.org/wiki/Howard_Garns'>Howard Garns</Link>
                        <div className="small bold text-gray-2">Creator of Sudoku</div>
                    </Figure>
                    <Figure
                        src={makiKajiImage}
                        alt="maki kaji image"
                    >
                        <Link href='https://en.wikipedia.org/wiki/Maki_Kaji'>Maki Kaji</Link>
                        <div className="small bold text-gray-2">Japanese puzzle manufacturer</div>
                    </Figure>
                </aside>
            </div>
        </section>
    )
}
