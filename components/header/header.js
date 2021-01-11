import 'bootstrap/dist/css/bootstrap.css';
import styles from './header.module.css';

import Lead from '../lead/lead';
import Editor from '../editor/editor';

const exampleCode = 
`function fibonacci(n) {
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}`    

export default function Header() {
    return(
        <div className={`${styles.header}`}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col`}>
                        <div className={`ml-5 pl-5 pt-5`}>
                            <div className={`${styles.title}`}>EveryLine</div>
                            <div className={`${styles.description} mb-3`}>
                                Create coding tutorials quickly and effortlessly.
                            <br/>
                                Everything you need, in one streamlined platform.
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