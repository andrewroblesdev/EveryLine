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
                        Workshop details
                    </div>
                    <div className={`${styles.medium}`}>
                    TikTok creators from the tech community are meeting on Friday, March 12th at 8pm PST over Zoom
                    </div>
                </div>
            </div>
            <div className={`${styles.spacer}`}></div>
            <div className={`row justify-content-center`}>
                <div className={`col text-center mb-5 ${styles.info}`}>
                    <i className={`fas fa-video fa-3x`}></i>
                    
                    <div className={`${styles.subtitle}`}>
                        Create TikTok
                    </div>
                    <div className={`${styles.small}`}>
                       You will be given a video prompt and time limit to upload a TikTok  
                    </div>
                </div>
                <div className={`col text-center mb-5 ${styles.info}`}>
                    <div>
                        <i className={`fas fa-comments fa-3x`}></i>
                    </div>
                    <div className={`${styles.subtitle}`}>
                        Get feedback
                    </div>
                    <div className={`${styles.small}`}>
                        Creators will be placed in breakout rooms to give and receive feedback
                    </div>
                </div>
                <div className={`col text-center ${styles.info}`}>
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