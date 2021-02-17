import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/js/all.js';
import styles from './about.module.css';

export default function About() {
    return(
        <div className={`container`}>
            <div className={`${styles.border}`}></div>
            <div className={`row justify-content-center`}>
                <div className={`col text-center`}>
                    <div className={`${styles.title}`}>
                        Why EveryLine?
                    </div>
                    <div className={`${styles.medium}`}>
                        Making tutorials by manually writing code while screen recording is:
                    </div>
                </div>
            </div>
            <div className={`${styles.spacer}`}></div>
            <div className={`row justify-content-center`}>
                <div className={`col-md-3 text-center mb-5`}>
                    <i className={`fas fa-car-crash fa-2x`}></i>
                    
                    <div className={`${styles.subtitle}`}>
                        Error Prone
                    </div>
                    <div className={`${styles.small}`}>
                        Syntax errors or typos in code can be overlooked and make the uploaded final cut
                    </div>
                </div>
                <div className={`col-md-3 text-center mb-5`}>
                    <div>
                        <i className={`fas fa-hourglass-half fa-2x`}></i>
                    </div>
                    <div className={`${styles.subtitle}`}>
                        Time consuming
                    </div>
                    <div className={`${styles.small}`}>
                        Having to do multiple takes or excessive preplanning can be time costly
                    </div>
                </div>
                <div className={`col-md-3 text-center`}>
                    <div>
                        <i className={`fas fa-trash-alt fa-2x`}></i>
                    </div>
                    <div className={`${styles.subtitle}`}>
                        Not reusable
                    </div>
                    <div className={`${styles.small}`}>
                        Video footage of code cannot be altered to be used for other tutorials
                    </div>
                </div>
            </div>
            <div className={`${styles.border} mb-5`}></div>
        </div>
    )
}