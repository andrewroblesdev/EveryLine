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
                <nav class="navbar navbar-dark ${ styles.navbar }">
                    <div className={`${ styles.title}`}>EveryLine</div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </nav>
              <div className={`container pb-5`}>
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