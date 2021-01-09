import 'bootstrap/dist/css/bootstrap.css';
import styles from './demo.module.css';

export default function Demo() {
    return(
        <div className={`${styles.backdrop}`}>
            <div className={`text-center`}>
                <div className={`${styles.space}`}></div>
                <div className={`${styles.title}`}>
                    Try It Out
                </div>
                <div className={`${styles.space}`}></div>
                <div className={`${styles.space}`}></div>
                <div className={`${styles.space}`}></div>
                <div className={`${styles.space}`}></div>
                <div className={`${styles.space}`}></div>
                <div className={`${styles.space}`}></div>
                <div className={`${styles.small}`}>
                    Copyright © 2021 EveryLine, LLC. All rights reserved.
                </div>
            </div>
        </div>
    )
}