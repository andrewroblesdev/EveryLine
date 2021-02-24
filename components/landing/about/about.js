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
                    Masterclass will take place on Sunday, February 28th at 5pm PST over Zoom
                    </div>
                </div>
            </div>
            <div className={`${styles.spacer}`}></div>
            <div className={`row justify-content-center`}>
                <div className={`col text-center mb-5 ${styles.info}`}>
                    <i className={`fab fa-tiktok fa-3x`}></i>
                    
                    <div className={`${styles.subtitle}`}>
                        Create TikTok
                    </div>
                    <div className={`${styles.small}`}>
                        Upload a TikTok video according to the special instructions of masterclass professor
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
                        Discuss your video with peers to learn the trade secrets to producing viral content 
                    </div>
                </div>
                <div className={`col text-center ${styles.info}`}>
                    <div>
                        <i className={`fab fa-discord fa-3x`}></i>
                    </div>
                    <div className={`${styles.subtitle}`}>
                       Keep in touch 
                    </div>
                    <div className={`${styles.small}`}>
                        Connect with exclusive Discord community for valuable job referrals, mentors, and friendships
                    </div>
                </div>
            </div>
            <div className={`${styles.border} mb-5`}></div>
            <div className={`${styles.border} mb-5`}></div>
        </div>
    )
}