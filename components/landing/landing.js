import 'bootstrap/dist/css/bootstrap.css'
import styles from './landing.module.css'

import About from './about/about'

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
                      Hire a Tech Influencer
                    </div>
                    <div className={`${ styles.text }`}>
                      Premium services from influencers in the tech community
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
        <About className={`${ styles.about }`}/>
      </div>
    )
}