import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/js/all.js";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={`container`}>
      <div className={`${styles.border}`}></div>
      <div className={`row justify-content-center`}>
        <div className={`col text-center`}>
          <div className={`${styles.title}`}>Why EveryLine?</div>
        </div>  
      </div>
      <div className={`${styles.spacer}`}></div>
      <div className={`row justify-content-center`}>
        <div className={`col-md-3 text-center mb-5`}>
          <i className='fas fa-dollar-sign fa-2x'></i>

          <div className={`${styles.subtitle}`}>100% Free</div>
          <div className={`${styles.small}`}>
            Easily write and record code videos from any device, anywhere, at
            the low cost of, free!
          </div>
        </div>
        <div className={`col-md-3 text-center mb-5`}>
          <div>
            <i className='fas fa-tachometer-alt fa-2x'></i>
          </div>
          <div className={`${styles.subtitle}`}>Fast & Easy</div>
          <div className={`${styles.small}`}>
            Focus on one simple and easy task, EveryLine takes care of the rest!
          </div>
        </div>
        <div className={`col-md-3 text-center`}>
          <div>
            <i className='fas fa-undo-alt fa-2x'></i>
          </div>
          <div className={`${styles.subtitle}`}>reusable</div>
          <div className={`${styles.small}`}>
            Video footage of code can be altered to be used for other tutorials!
          </div>
        </div>
      </div>
      <div className={`${styles.border} mb-5`}></div>
    </div>
  );
}
