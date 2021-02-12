import 'bootstrap/dist/css/bootstrap.css';
import styles from './navbar.module.css';

import Link from 'next/link'
import { useRouter } from 'next/router'

// Firebase
import firebase from 'firebase/app'
import 'firebase/auth'

export default function Navbar(props) {

    const router = useRouter()

    const signOutUser = () => {
        signOut(router)
    }

    return(
        <div className={`${styles.navbar}`}>
            <div className={`container pb-5`}>
                <div className={`row`}>
                    <div classname={`col`}>
                        <div className={`${ styles.title } ${ styles.link }`}>
                            { !props.isPlaying && <Link href="/"><a className={`${styles.title} pl-3`}>EveryLine</a></Link> }
                        </div>
                    </div>
                    <div className={`col`}>
                        <button onClick={signOutUser} className={`btn btn-link ${ styles.link } float-right mt-4`}>Log out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function signOut(router) {
    firebase.auth().signOut().then(() => {
        // Sign out successful
        router.push('/')
    }).catch((error) => {
        // An error happened
    })
}



