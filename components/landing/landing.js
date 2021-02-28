import 'bootstrap/dist/css/bootstrap.css'
import styles from './landing.module.css'

import Link from 'next/link'

export default function Landing() {
    return(
      <div>
        <title>EveryLine</title>
            <div className={`${ styles.landing } `}>
              <div className={`container pb-5`}>
                <div className={`${ styles.title}`}>
                    <a>EveryLine</a>
                </div>
                    <div className={`${ styles.description }`}>
                      Tech Influencer Services 
                    </div>
                    <div className={`${ styles.text }`}>
                      Make money by providing tech services for your fans!
                    </div>
                    <div className="text-center">
                      <Link href="https://launchpass.com/everyline/tech-tok-masterclass">
                        <button type="button" className={`btn btn-lg ${ styles.button}`}>Sign up</button>
                      </Link>
                    </div>
                  </div>
                  <div className={`${styles.editor} col`}>
                  </div>
                </div>
        <div className={` container`}>
            <div className={`${styles.border}`}></div>
            <div className={`row justify-content-center`}>
                <div className={`col text-center`}>
                    <div className={`${styles.services}`}>
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
                    <a href="https://beacons.page/alysiatech">
                        <img className={`${styles.profile}`} src="/images/cryptoclasses.jpeg" /> 
                    </a>
                    <div className={`${styles.subtitle}`}>
                        Learn Crypto with Alysia
                    </div>
                    <div className={`${styles.small}`}>
                        Private Crypto Coaching sessions for you to gain clarity and be successful on you cryptocurrency and blockchain journey
                    </div>
                </div>
                <div className={`col text-center mb-5 ${styles.info}`}>
                    <div>
                        <a href="https://beacons.page/imjaewilliams">
                            <img className={`${styles.profile}`} src="/images/imjaewilliams.jpeg"></img>
                        </a>
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
                        <a href="https://beacons.page/r3versal">
                            <img className={`${styles.profile}`} src="/images/r3versal.jpeg"></img>
                        </a>
                    </div>
                    <div className={`${styles.subtitle}`}>
                      Consulting with Carmen
                    </div>
                    <div className={`${styles.small}`}>
                        We will work with you to bring your vision to life. Or help you refine it, if you're sill a bit unsure.
                    </div>
                </div>
            </div>
            <div className={`${styles.border} mb-5`}></div>
        </div>
      </div>
    )
}