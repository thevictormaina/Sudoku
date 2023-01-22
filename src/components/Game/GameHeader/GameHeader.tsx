import style from './gameHeader.module.scss';
import { Icon } from '@iconify/react';
import Timer from './Timer';

export default function GameHeader() {
    return (
        <header className={style.header}>
            <div className={style.actionLinks}>
                <a>
                    <Icon icon="ic:round-print" /> Print this game
                </a>
                <a>
                    <Icon icon="ic:baseline-share" />
                    Share with a friend
                </a>
            </div>
            <div className={style.gameDetails}>
                <div className="text-purple bold">1 / 3 Mistakes</div>
                <Timer />
            </div>
        </header>
    )
}
