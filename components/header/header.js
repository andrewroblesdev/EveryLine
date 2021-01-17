import 'bootstrap/dist/css/bootstrap.css';
import styles from './header.module.css';

import Lead from '../lead/lead';
import Editor from '../editor/editor';

const exampleCode = 
`// Fibonacci
function fib(n) {
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}`    

export default function Header() {
    return(
        <div className={`${styles.header}`}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`${styles.content} col`}>
                        <div className={`${styles.description} pt-5`}>
                            <div className={`mb-3`}>
                                Easily create coding tutorials
                            <br/>
                                Spend more time coding
                            <br/>
                                Spend less time filming
                            </div>
                            <Lead />
                        </div>
                    </div>
                    <div className={`col`}>
                        <Editor code={exampleCode}/>
                    </div>
                </div>  
            </div>
        </div>
    )
}