import { useState } from 'react'

import Navbar from '../components/navbar/navbar';
import Player from '../components/player/player';

const title = 'Moving Average'
const exampleCode = 
`# Get 150 day historical data 
data = data['historical'][-150]

# Create dataframe from price data
prices = pd.DataFrame.from_dict(data)
prices = prices.set_index('data')

# Calculate 20 day moving average
close = prices['close']
rolling = close.rolling(window=20)
prices['MA20'] = close.mean()
`  

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
            <Navbar isPlaying={state.isPlaying}/>
            <Player isPlaying={state.isPlaying} toggleIsPlaying={toggleIsPlaying} title={title} code={exampleCode}/>
        </span>
    )
}