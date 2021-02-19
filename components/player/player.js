import { useState } from 'react'

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
    const [postIndex, setPostIndex] = useState(0)

    const incrementPostIndex = () => {
        setPostIndex(postIndex + 1)
    }

    const decrementPostIndex = () => {
        setPostIndex(postIndex - 1)
    }

    const handleNextButtonClick = () => {
        if (postIndex < props.posts.length - 1) {
            incrementPostIndex()
        } else {
            promptUserEndOfContent()
        }
    } 

    const handleBackButtonClick = () => {
        if (postIndex > 0) {
            decrementPostIndex()
        } else {
            promptUserBeginningOfContent()
        }
    }

    const promptUserEndOfContent = () => {
        alert("You've reached the end.")
    }

    const promptUserBeginningOfContent = () => {
        alert('Already at the beginning.')
    }

    return(
        <div className={`${styles.player}`}>
            <div className={`container`}>
                <div className={`${styles.editor}`}>
                    <div className={`${styles.navbar}`}>
                        <Tab event={handleBackButtonClick}/>
                        <Button event={handleNextButtonClick}/>
                    </div>
                    <CodeMirror
                        value={props.posts[postIndex]}
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

