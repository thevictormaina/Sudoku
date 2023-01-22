import { Icon } from "@iconify/react"
import style from "./button.module.scss"

type ButtonProps = { text: string, icon: string, type: 'button' | 'submit' | 'reset', className?: string }

export default function Button({ text, icon, type ='button', className = 'button-purple' }: ButtonProps){
    return <button className={[className, style.button].join(' ')} type={type}>
        <Icon icon={icon}/>
        <span>{text}</span>
    </button>
}