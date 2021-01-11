import 'bootstrap/dist/css/bootstrap.css';
import styles from './navbar.module.css';

export default function Navbar() {
    return(
        <div className={`${styles.navbar}`}>
            <div className={`container`}>
                <div className={`row justify-content-between`}>
                    <div className={`col-3 mt-4`}>
                        <div>
                            <div className={`float-left ml-2 mr-2`}>
                                <img
                                    src="/logo.png"
                                    className={`${styles.logo} `}
                                />
                            </div>
                            <div className={`${styles.title} ${styles.left}`}>EveryLine</div>
                        </div>
                        <div className={`${styles.subtitle}`}>Animate your Coding Tutorials</div>
                    </div>
                </div>
            </div>
        </div>
    )
}



