import Editor from '../components/editor/editor';
import Controls from '../components/controls/controls';
import Player from '../components/player/player';

export default function Notepad() {
    return(
        <span>
            <Controls />
            <Player />
        </span>
    )
}