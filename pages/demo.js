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
prices['MA20'] = close.mean()`  

const posts = [
`
print('first post'),
`,
`
print('second post'),
`
]

export default function Demo() {
    return(
        <span>
            <Navbar />
            <Player code={exampleCode} posts={posts}/>
        </span>
    )
}