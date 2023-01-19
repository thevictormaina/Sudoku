import style from "./footer.module.scss"
import BuyMeACoffee from "./BuyMeACoffee"

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className="small">Developed with ❤️ by <a href="">Victor Maina</a></div>
            <BuyMeACoffee />
        </footer>
    )
}
