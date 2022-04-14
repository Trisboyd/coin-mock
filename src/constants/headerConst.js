import crypt from '../images/crypt.png';

export const HeaderData = {
    title: 'Crypt(o) Watch',
    image: crypt,
    modes: {
        dark: 'Dark',
        light: 'Light'
    },
    frequency: [
        { time: '2s' },
        { time: '10s' },
        { time: '30s' },
        { time: '60s' }
    ],
    currency: [
        {
            name: 'USD',
            symbol: '$'
        },
        {
            name: 'EUR',
            symbol: '€'
        },
        {
            name: 'GBP',
            symbol: '£'
        },
        {
            name: 'AUD',
            symbol: 'A$'
        },
        {
            name: 'CAD',
            symbol: 'C$'
        },
        // {
        //     name: 'BTC',
        //     symbol: 'BTC'
        // },
        // {
        //     name: 'ETH',
        //     symbol: 'ETH'
        // }
    ],
    links: [
        {
            name: 'Features (coming soon) →',
            left: true
        },
        {
            name: 'Coins'
        },
        { name: 'Compare' },
        { name: 'Chat' }
    ]
}