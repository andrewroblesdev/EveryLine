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
                        Making tutorials by writing code then screen recording results in:
                    </div>
                </div>
            </div>
            <div className={`${styles.spacer}`}></div>
            <div className={`row justify-content-center`}>
                <div className={`col-md-3 text-center mb-5`}>
                    <i className={`fas fa-car-crash fa-2x`}></i>
                    
                    <div className={`${styles.subtitle}`}>
                        Less Errors
                    </div>
                    <div className={`${styles.small}`}>
                        Syntax errors or typos in code are less likely to be overlooked and show up in the final cut
                    </div>
                </div>
                <div className={`col-md-3 text-center mb-5`}>
                    <div>
                        <i className={`fas fa-hourglass-half fa-2x`}></i>
                    </div>
                    <div className={`${styles.subtitle}`}>
                        Saved Time
                    </div>
                    <div className={`${styles.small}`}>
                        No longer having to do multiple takes or excessive preplanning that can be time costly
                    </div>
                </div>
                <div className={`col-md-3 text-center`}>
                    <div>
                        <i className={`fas fa-recycle fa-2x`}></i>
                    </div>
                    <div className={`${styles.subtitle}`}>
                        Reusable Code
                    </div>
                    <div className={`${styles.small}`}>
                        Video footage of code can be altered to be used for other tutorials
                    </div>
                </div>
            </div>
            <div className={`${styles.border} mb-5`}></div>
        </div>
    )
}