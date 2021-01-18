import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'

if (typeof navigator !== 'undefined') {
    require('codemirror/mode/javascript/javascript')
}

import Tab from './tab/tab'
import Button from './button/button'

import 'bootstrap/dist/css/bootstrap.css'
import styles from './player.module.css'

export default function Player() {
    return(
        <div className={`${styles.player}`}>
            <div className={`container`}>
                <div className={`${styles.editor}`}>
                    <div className={`${styles.navbar}`}>
                        <Tab title='Untitled'/>
                        <Button />
                    </div>
                    <CodeMirror
                        value={''}
                        options={{
                            mode: 'javascript',
                            theme: 'dracula',
                            lineNumbers: true,
                            readOnly: false
                        }}
                        editorDidMount={editor => {editor.setSize(null, "800");}}
                    />
                </div>
            </div>
        </div>
    )
}