import styles from './tab.module.css'

export default function Tab(props) {
    return(
        <div className={`${styles.tab}`}>
            <input className={`form-control ml-4`} placeholder="Untitled"></input>
        </div>
    )
}