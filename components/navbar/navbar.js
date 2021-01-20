import 'bootstrap/dist/css/bootstrap.css';
import styles from './navbar.module.css';

import Link from 'next/link'

export default function Navbar(props) {
    return(
        <div className={`${styles.navbar}`}>
            <div className={`container`}>
                <div className={`row justify-content-between`}>
                    <div className={`col mt-4`}>
                        { !props.isPlaying && <Link href="/"><a className={`${styles.title}`}>EveryLine</a></Link> }
                    </div>
                </div>
            </div>
        </div>
    )
}



