import { Icon } from "@iconify/react"
import { PropsWithChildren } from "react";
import style from './link.module.scss'
import { IconifyIcon } from "@iconify/react";


type LinkProps = { href: string; target?: string, icon?: IconifyIcon }

export default function Link(props: LinkProps & PropsWithChildren) {
    let { href, icon, target = '_blank' }: LinkProps = props;
    
    return (
        <a className={style.link} href={href} target={target}>
            { props.children }
            <Icon icon={icon || 'mdi:external-link'} />
        </a>
    )
}
