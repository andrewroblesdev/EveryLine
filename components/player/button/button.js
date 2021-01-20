import styles from './button.module.css'

export default function Button(props) {
    return(
        <div className={`${styles.button}`}>
            <button onClick={props.event} type="button" className={`${styles.custom} btn`}>Done</button>
        </div>
    )
}