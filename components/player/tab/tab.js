import styles from './tab.module.css'

export default function Tab(props) {
    return(
        <div className={`${styles.tab}`}>
            <button onClick={props.event} type="button" className={`${styles.custom} btn`}>Back</button>
        </div>
    )
}