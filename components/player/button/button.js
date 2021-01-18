import styles from './button.module.css'

export default function Button() {
    return(
        <div className={`${styles.button}`}>
            <button type="button" className={`${styles.custom} btn`}>Done</button>
        </div>
    )
}