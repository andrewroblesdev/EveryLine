import 'bootstrap/dist/css/bootstrap.css';
import styles from './controls.module.css';

export default function Controls() {
    return(
        <div className={`${styles.navbar}`}>
            <div className={`container`}>
                <div className={`row justify-content-between`}>
                    <div className={`col mt-4`}>
                        <div className={`${styles.title}`}>EveryLine</div>
                    </div>
                    <div className={`${styles.link} col mt-4`}>
                        <p>Sign out</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
