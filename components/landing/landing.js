import 'bootstrap/dist/css/bootstrap.css'
import styles from './landing.module.css'

import Editor from '../editor/editor'
import About from '../about/about'

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
                <div className={`row`}>
                  <div className={`col`}>
                    <div className={`${ styles.description }`}>
                     Tech TikTok Workshop 
                    </div>
                    <div className={`${ styles.text }`}>
                      Get feedback on your TikTok videos from content creators in tech
                    </div>
                    <Link href="https://discord.gg/yeWnF738pV">
                      <a className={`btn btn-lg btn-block ${ styles.button}`}>Claim spot</a>
                    </Link>
                  </div>
                  <div className={`${styles.editor} col`}>
                  </div>
                </div>
              </div>
            </div>
        <About className={`${ styles.about }`}/>
      </div>
    )
}