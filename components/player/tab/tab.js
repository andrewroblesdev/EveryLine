import styles from './tab.module.css'

export default function Tab(props) {
    return(
        <div className={`${styles.tab}`}>
            <p>{props.title}</p>
        </div>
    )
}