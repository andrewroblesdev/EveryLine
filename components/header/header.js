import 'bootstrap/dist/css/bootstrap.css';
import styles from './header.module.css';

import Lead from '../lead/lead';

export default function Header() {
    return(
        <div className={`${styles.backsplash}`}>
            <div className={`container`}>
                <div className={`ml-5 pl-5 pt-5`}>
                    <div className={`${styles.title}`}>EveryLine</div>
                    <div className={`${styles.description} mb-3`}>
                        Create coding tutorials quickly and effortlessly.
                    <br/>
                        Everything you need, in one streamlined platform.
                    </div>
                    <Lead />
                    {/* <button type="button" className={`btn ${styles.btnCustom}`}>Sign up</button> */}
                </div>
            </div>
        </div>
    )
}