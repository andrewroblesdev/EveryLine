import 'bootstrap/dist/css/bootstrap.css';
import styles from './landing.module.css';

import Editor from '../editor/editor';
import About from '../about/about';

const exampleCode = 
`// Fibonacci
function fib(n) {
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    return fib(n-1) + fib(n-2);
  }
}`  

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
                      Make coding TikToks
                    </div>
                    <a className={`btn btn-lg btn-block ${ styles.button}`}>Get started</a>
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