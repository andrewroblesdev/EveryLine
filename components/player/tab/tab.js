import styles from './tab.module.css'

export default function Tab(props) {
    const updateFileExtensionState = (filename) => {
        if (stringContainsFileExtension(filename)) {
            const extension = parseFileExtension(filename)
            
            if (extension in fileTypesByFileExtensions) {
                const fileType = fileTypesByFileExtensions[extension]
                props.updateFileTypeState(fileType)
            } else {
                props.updateFileTypeState('')
            }
        } else {
            props.updateFileTypeState('')
        }
    }

    return(
        <div className={`${styles.tab}`}>
            <input className={`form-control`} placeholder={props.title} onBlur={e => updateFileExtensionState(e.target.value)}></input>
        </div>
    )
}

function parseFileExtension(filename) {
    return filename.split('.').pop();
}

function stringContainsFileExtension(filename) {
    return filename.includes('.')
}

const fileTypesByFileExtensions = {
    'js': 'javascript',
    'py': 'python',
    'sh': 'shell',
    'css': 'css',
    'dockerfile': 'dockerfile',
    'go': 'go',
    'php': 'php',
    'r': 'r',
    'rb': 'ruby',
    'scm': 'scheme',
    'sql': 'sql',
    'swift': 'swift',
    'vb': 'vb',
    'xml': 'xml'
}