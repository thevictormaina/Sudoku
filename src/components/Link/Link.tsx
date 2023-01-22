type LinkProps = { text: string; href: string; target: string }

export default function Link({ text, href, target }: LinkProps) {
    return (
        <a href={href} target={target}>
            {text}
        </a>
    )
}
