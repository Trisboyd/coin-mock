import heart from '../images/heart.svg';

export const TableData = {
    head: [
        {
            name: '#'
        },
        {
            name: 'Coin'
        },
        {
            name: 'Price'

        },
        {
            name: 'Market Cap'

        },
        {
            name: 'Volume 24h'
        },
        {
            name: 'All-time High'
        },
        {
            name: '1h'
        },
        {
            name: '24h'
        },
    ],
    coins: [
        [
            { heart: heart },
            {
                image: heart,
                short: 'BTC',
                name: 'Bitcoin'
            },
            {
                name: 'price',
                value: 12
            },
            {
                name: 'cap',
                value: 12
            },
            {
                name: 'volume',
                value: 12
            },
            {
                liquid: 'liquid',
                value: 12
            },
            {
                high: 'high',
                value: 12
            },
            {
                name: 'hour',
                color: 'red',
                value: 12
            },
            {
                name: 'day',
                value: 12,
                color: 'red'
            }
        ]
    ]
}
