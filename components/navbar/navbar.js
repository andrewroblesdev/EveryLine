import 'bootstrap/dist/css/bootstrap.css';
import styles from './navbar.module.css';

import Link from 'next/link'

export default function Navbar(props) {
    return(
        <div className={`${styles.navbar}`}>
            <div className={`container pb-5`}>
                <div className={`${ styles.title } ${ styles.link }`}>
                    { !props.isPlaying && <Link href="/"><a className={`${styles.title}`}>EveryLine</a></Link> }
                </div>
            </div>
        </div>
    )
}



