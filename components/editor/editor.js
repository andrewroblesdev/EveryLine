import {useState } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import styles from './editor.module.css'

import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'

if (typeof navigator !== 'undefined') {
    require('codemirror/mode/javascript/javascript')
}

import Tab from './tab/tab'

export default function Editor(props) {
    return (
        <div>
            <Tab />
            <CodeMirror
                value={props.code}
                options={{
                    mode: 'javascript',
                    theme: 'dracula',
                    lineNumbers: true,
                    readOnly: true
                }}
            />
        </div>
    )
}