import { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import styles from './editor.module.css'

import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'

if (typeof navigator !== 'undefined') {
    require('codemirror/mode/javascript/javascript')
    require('codemirror/mode/python/python')
}

import Tab from './tab/tab'

export default function Editor(props) {
    const [state, setState] = useState({
        'codeToWrite': props.code,
        'writtenCode': '',
        'charIndex': 0,
    })

    useEffect(() => {
        if(state.codeToWrite) {
            typeChar()
        }
    })

    const typeChar = () => {
        if(state.codeToWrite.length > state.charIndex) {
            setTimeout(updateState, 50)
        }
    }

    const updateState = () => {
        setState({
            'codeToWrite': props.code,
            'writtenCode': state.writtenCode + state.codeToWrite[state.charIndex],
            'charIndex': state.charIndex + 1
        })
    }

    return (
        <div className={`${styles.editor}`}>
            <Tab />
            <CodeMirror
                value={props.code}
                options={{
                    mode: 'python',
                    theme: 'dracula',
                    lineNumbers: false,
                    readOnly: 'nocursor'
                }}
            />
        </div>
    )
}