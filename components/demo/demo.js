import 'bootstrap/dist/css/bootstrap.css';
import styles from './demo.module.css';

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

export default function Demo() {
    return(
        <div className={`${styles.backdrop}`}>

                <div className={`${styles.space}`}></div>

                <div className={`text-center ${styles.title}`}>
                    Try It Out
                </div>

                <div className={`${styles.space}`}></div>

                <div className={`${styles.editor}`}>
                    <Editor code={exampleCode}/>
                </div>

                <div className={`${styles.space}`}></div>

                <div className={`text-center ${styles.small} pb-3`}>
                    Copyright © 2021 EveryLine, LLC. All rights reserved.
                </div>
        </div>
    )
}