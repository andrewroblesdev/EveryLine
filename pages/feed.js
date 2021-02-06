import 'bootstrap/dist/css/bootstrap.css'
import styles from './feed.module.css'

import Editor from '../components/editor/editor'

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

export default function Feed() {
    return(
      <div>
        <title>EveryLine</title>
            <div className={`${ styles.landing } `}>
              <div className={`container pb-5`}>
                <div className={`${ styles.title}`}>
                    <a>EveryLine</a>
                </div>
                <div className={`row`}>
                  <Snippet filename={`Tab.js`} code={exampleCode}/>
                  <Snippet filename={`Tab.js`} code={exampleCode}/>
                  <Snippet filename={`Tab.js`} code={exampleCode}/>
                </div>
              </div>
            </div>
      </div>
    )
}

function Snippet(filename, code) {
   return(
        <div className={`${styles.editor} col`}>
            <Editor filename={`Tab.js`} code={exampleCode} />
        </div>
   ) 
}