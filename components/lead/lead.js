import styles from './lead.module.css'

import Link from 'next/link'

export default function Lead() {  
    return (
      <Link href="/demo">
        <a className={`btn ${styles.btnCustom}`}>Try It Out</a>
      </Link>
    );
  
}