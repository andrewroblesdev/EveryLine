import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/js/all.js";
import styles from "./about.module.css";

//TODO Change the icons over every description, line, 19, 28, 37



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
          <i className={`fas fa-car-crash fa-2x`}></i>

          <div className={`${styles.subtitle}`}>infallible</div>
          <div className={`${styles.small}`}>
            Write bug free code which just plain works and is easy to read
          </div>
        </div>
        <div className={`col-md-3 text-center mb-5`}>
          <div>
            <i className={`fas fa-hourglass-half fa-2x`}></i>
          </div>
          <div className={`${styles.subtitle}`}>Fast & Easy</div>
          <div className={`${styles.small}`}>
            Focus on one simple and easy task, EveryLine takes care of the rest
          </div>
        </div>
        <div className={`col-md-3 text-center`}>
          <div>
            <i className={`fas fa-trash-alt fa-2x`}></i>
          </div>
          <div className={`${styles.subtitle}`}>reusable</div>
          <div className={`${styles.small}`}>
            Video footage of code can be altered to be used for other tutorials
          </div>
        </div>
      </div>
      <div className={`${styles.border} mb-5`}></div>
    </div>
  );
}
