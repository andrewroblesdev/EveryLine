import 'bootstrap/dist/css/bootstrap.css';
import styles from './navbar.module.css';

import Link from 'next/link'

export default function Navbar(props) {
    return(
        <div className={`${styles.navbar}`}>
            <div className={`container pb-5`}>
                <div className={`row`}>
                    <div classname={`col`}>
                        <div className={`${ styles.title } ${ styles.link }`}>
                            { !props.isPlaying && <Link href="/"><a className={`${styles.title} pl-3`}>EveryLine</a></Link> }
                        </div>
                    </div>
                    <div className={`col`}>
                        <div className={`${ styles.link } float-right mt-4`}>Log out</div>
                    </div>
                </div>
            </div>
        </div>
    )
}



