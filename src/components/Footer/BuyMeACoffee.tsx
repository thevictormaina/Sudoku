import { Icon } from "@iconify/react"
import footer from "./footer.module.scss"

export default function BuyMeACoffee() {
    const url = "https://www.buymeacoffee.com/victormaina"

    return (
        <div className={footer.buyMeACoffee}>
            <a className="small" href={url} target='_blank'>
                <Icon icon="line-md:buy-me-a-coffee-twotone" />
                <span>Buy me a coffee</span>
            </a>
        </div>
    )
}
