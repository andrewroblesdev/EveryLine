import 'bootstrap/dist/css/bootstrap.css'
import styles from './landing.module.css'

import Editor from '../editor/editor'
import About from '../about/about'

import Link from 'next/link'

const exampleCode = 
`# Get 150 day historical data 
data = data['historical'][-150]

# Create dataframe from price data
prices = pd.DataFrame.from_dict(data)
prices = prices.set_index('data')

# Calculate 20 day moving average
close = prices['close']
rolling = close.rolling(window=20)
prices['MA20'] = close.mean()
`  

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
                      Learn to build a trading bot
                    </div>
                    <Link href="/demo">
                      <a className={`btn btn-lg btn-block ${ styles.button}`}>Get started</a>
                    </Link>
                  </div>
                  <div className={`${styles.editor} col`}>
                      <Editor code={exampleCode} />
                  </div>
                </div>
              </div>
            </div>
        <About className={`${ styles.about }`}/>
      </div>
    )
}