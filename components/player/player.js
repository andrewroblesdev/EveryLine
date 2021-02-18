// Codemirror
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'

if (typeof navigator !== 'undefined') {
    require('codemirror/mode/python/python')
}

// Components
import Tab from './tab/tab'
import Button from './button/button'

// Styles
import 'bootstrap/dist/css/bootstrap.css'
import styles from './player.module.css'

export default function Player(props) {

    const promptUserEndOfContent = () => {
        alert('More content coming soon.')
    }

    return(
        <div className={`${styles.player}`}>
            <div className={`container`}>
                <div className={`${styles.editor}`}>
                    <div className={`${styles.navbar}`}>
                        <Tab title={props.title}/>
                        { !props.isPlaying && <Button event={promptUserEndOfContent}/> }
                    </div>
                    <CodeMirror
                        value={props.code}
                        options={{
                            mode: 'python',
                            theme: 'dracula',
                            lineNumbers: true,
                            readOnly: true 
                        }}
                        editorDidMount={editor => {editor.setSize(null, "800");}}
                        onBeforeChange={(editor, data, value) => {
                           updateValueState(value)
                        }}
                        onChange={(editor, data, value) => {
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

