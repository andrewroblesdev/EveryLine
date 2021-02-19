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
`# Lesson 1: Plotting historical data 

# Import python packages
import robin_stocks as r
import pandas as pd
import matplotlib
import time`,
`# Login to Robinhood account
username = 'YOUR USERNAME'
password = 'YOUR PASSWORD'

login = r.login(username, password)`,
`# Define crypto symbol to analyze
symbol = 'DOGE'

# Get name from Robinhood API
name = r.crypto.get_crypto_info(
        symbol
    )['name']

# Get price history from API
hist = r.crypto.
    get_crypto_historicals(
        symbol, 
        interval='day', 
        span='month'
    )
`,
`# Add data from API to dataframe
hist_df = pd.DataFrame()

for i in range(len(hist)):

    curr_df = pd.DataFrame(
        hist[i], 
        index = [i]
    )

    hist_df = pd.concat([
        hist_df, 
        curr_df
    ])`,
`# Convert dataframe data from strings 
# to math compatible values
hist_df.begins_at = pd.to_datetime(
    hist_df.begins_at, 
    infer_datetime_format=True
)
hist_df.open_price = hist_df.
    open_price.astype('float32')
hist_df.close_price = hist_df.
    close_price.astype('float32')
hist_df.high_price = hist_df.
    high_price.astype('float32')
hist_df.low_price = hist_df.
    low_price.astype('float32')`,
`# Use dataframe to create a plot 
# to visualize data
ax = hist_df.plot(
    x = 'begins_at', 
    y = 'open_price', 
    figsize=(16,8)
)`,
`# Label the graph for readability
ax.set_xlabel('Date')
ax.set_ylabel('Price (USD)')
ax.legend([symbol])
ax.set_title(name)`
]

export default function Demo() {
    return(
        <span>
            <Navbar />
            <Player code={exampleCode} posts={posts}/>
        </span>
    )
}