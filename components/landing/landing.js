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
                     Tech TikTok Workshop 
                    </div>
                    <div className={`${ styles.text }`}>
                      Get feedback on your TikTok videos from content creators in tech
                    </div>
                    <div className="text-center">
                      <Link href="https://discord.gg/yeWnF738pV">
                        <button type="button" className={`btn btn-lg ${ styles.button}`}>Claim spot</button>
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