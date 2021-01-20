import { useState, useEffect } from 'react'

import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'

if (typeof navigator !== 'undefined') {
    require('codemirror/mode/javascript/javascript')
    require('codemirror/mode/python/python')
    require('codemirror/mode/shell/shell')
    require('codemirror/mode/css/css')
    require('codemirror/mode/dockerfile/dockerfile')
    require('codemirror/mode/go/go')
    require('codemirror/mode/php/php')
    require('codemirror/mode/r/r')
    require('codemirror/mode/ruby/ruby')
    require('codemirror/mode/scheme/scheme')
    require('codemirror/mode/sql/sql')
    require('codemirror/mode/swift/swift')
    require('codemirror/mode/vb/vb')
    require('codemirror/mode/xml/xml')
}

import Tab from './tab/tab'
import Button from './button/button'

import 'bootstrap/dist/css/bootstrap.css'
import styles from './player.module.css'

export default function Player(props) {
    const [state, setState] = useState({
        'fileType': '',
        'value': '',
        'codeToWrite': '',
        'charIndex': 0
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
            'fileType': state.fileType,
            'codeToWrite': state.codeToWrite,
            'value': state.value + state.codeToWrite[state.charIndex],
            'charIndex': state.charIndex + 1
        })
    }

    const updateFileTypeState = (newFileType) => {
        setState({
            'fileType': newFileType,
            'value': state.value,
            'codeToWrite': state.codeToWrite,
            'charIndex': state.charIndex
        })
    }

    const updateValueState = (value) => {
        setState({
            'fileType': state.fileType,
            'value': value,
            'codeToWrite': state.codeToWrite,
            'charIndex': state.charIndex
        })
    }

    const clearEditor = () => {
        setState({
            'fileType': state.fileType,
            'codeToWrite': state.value,
            'charIndex': state.charIndex,
            'value': ''
        })
    }

    const playScenario = () => {
        props.toggleIsPlaying()
        clearEditor()
    }

    return(
        <div className={`${styles.player}`}>
            <div className={`container`}>
                <div className={`${styles.editor}`}>
                    <div className={`${styles.navbar}`}>
                        <Tab title='Untitled' updateFileTypeState={updateFileTypeState} />
                        { !props.isPlaying && <Button event={playScenario}/> }
                    </div>
                    <CodeMirror
                        value={state.value}
                        options={{
                            mode: state.fileType,
                            theme: 'dracula',
                            lineNumbers: true,
                            readOnly: false
                        }}
                        editorDidMount={editor => {editor.setSize(null, "800");}}
                        onChange={(editor, data, value) => {updateValueState(editor.getValue())}}
                    />
                </div>
            </div>
        </div>
    )
}

