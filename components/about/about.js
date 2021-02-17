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
                       Learning how to build a trading bot will equip you with these valuable skills: 
                    </div>
                </div>
            </div>
            <div className={`${styles.spacer}`}></div>
            <div className={`row justify-content-center`}>
                <div className={`col-md-3 text-center mb-5`}>
                    <i className={`fab fa-python fa-3x`}></i>
                    
                    <div className={`${styles.subtitle}`}>
                        Learn Python
                    </div>
                    <div className={`${styles.small}`}>
                       Arguably one of the most powerful languages you can learn 
                    </div>
                </div>
                <div className={`col-md-3 text-center mb-5`}>
                    <div>
                        <i className={`fas fa-money-bill-wave fa-3x`}></i>
                    </div>
                    <div className={`${styles.subtitle}`}>
                        Trade stocks 
                    </div>
                    <div className={`${styles.small}`}>
                        An essential skill to building wealth is learning how to invest your money 
                    </div>
                </div>
                <div className={`col-md-3 text-center`}>
                    <div>
                        <i className={`fas fa-chart-line fa-3x`}></i>
                    </div>
                    <div className={`${styles.subtitle}`}>
                        Find trends 
                    </div>
                    <div className={`${styles.small}`}>
                        Use the Pandas and Matplotlib libraries to see into and predict the future 
                    </div>
                </div>
            </div>
            <div className={`${styles.border} mb-5`}></div>
        </div>
    )
}