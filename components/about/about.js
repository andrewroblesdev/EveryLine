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
                        What is EveryLine?
                    </div>
                    <div className={`${styles.medium}`}>
                       4 workshops over a 2 week period
                    </div>
                </div>
            </div>
            <div className={`${styles.spacer}`}></div>
            <div className={`row justify-content-center`}>
                <div className={`col-md-3 text-center mb-5`}>
                    <i className={`fas fa-video fa-3x`}></i>
                    
                    <div className={`${styles.subtitle}`}>
                        Create TikToks
                    </div>
                    <div className={`${styles.small}`}>
                       Each workshop starts with recording and uploading a tech TikTok video  
                    </div>
                </div>
                <div className={`col-md-3 text-center mb-5`}>
                    <div>
                        <i className={`fas fa-comments fa-3x`}></i>
                    </div>
                    <div className={`${styles.subtitle}`}>
                        Get feedback
                    </div>
                    <div className={`${styles.small}`}>
                        Watch party to learn how to maximize engagement from a tech audience
                    </div>
                </div>
                <div className={`col-md-3 text-center`}>
                    <div>
                        <i className={`fas fa-handshake fa-3x`}></i>
                    </div>
                    <div className={`${styles.subtitle}`}>
                        Build network
                    </div>
                    <div className={`${styles.small}`}>
                        Establish valuable connections within the tech TikTok community
                    </div>
                </div>
            </div>
            <div className={`${styles.border} mb-5`}></div>
            <div className={`${styles.border} mb-5`}></div>
        </div>
    )
}