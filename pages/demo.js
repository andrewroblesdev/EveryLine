import { useState } from 'react'

import Navbar from '../components/navbar/navbar';
import Player from '../components/player/player';

export default function Demo() {
    const [state, setState] = useState({
        'isPlaying': false
    })

    const toggleIsPlaying = () => {
        setState({
            'isPlaying': !state.isPlaying
        })
    }

    return(
        <span>
            <Navbar isPlaying={state.isPlaying} />
            <Player isPlaying={state.isPlaying} toggleIsPlaying={toggleIsPlaying}/>
        </span>
    )
}
