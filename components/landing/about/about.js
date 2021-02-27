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
                       Services Available 
                    </div>
                    <div className={`${styles.medium}`}>
                        Content creators each offer a unique tech service to their fans
                    </div>
                </div>
            </div>
            <div className={`${styles.spacer}`}></div>
            <div className={`row justify-content-center`}>
                <div className={`col text-center mb-5 ${styles.info}`}>
                    <i className={`fab fa-tiktok fa-3x`}></i>
                    
                    <div className={`${styles.subtitle}`}>
                        Learn Crypto with Alysia
                    </div>
                    <div className={`${styles.small}`}>
                        Private Crypto Coaching sessions for you to gain clarity and be successful on you cryptocurrency and blockchain journey
                    </div>
                </div>
                <div className={`col text-center mb-5 ${styles.info}`}>
                    <div>
                        <i className={`fas fa-comments fa-3x`}></i>
                    </div>
                    <div className={`${styles.subtitle}`}>
                       Online Tutoring with Jae 
                    </div>
                    <div className={`${styles.small}`}>
                      Learn how to code from me 1 on 1  
                    </div>
                </div>
                <div className={`col text-center ${styles.info}`}>
                    <div>
                        <i className={`fab fa-discord fa-3x`}></i>
                    </div>
                    <div className={`${styles.subtitle}`}>
                       Software consulting with Carmen
                    </div>
                    <div className={`${styles.small}`}>
                        We will work with you to bring your vision to life. Or help you refine it, if you're sill a bit unsure.
                    </div>
                </div>
            </div>
            <div className={`${styles.border} mb-5`}></div>
            <div className={`${styles.border} mb-5`}></div>
        </div>
    )
}