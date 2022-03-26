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
        { type: 'USD ($)' },
        { type: 'EUR' },
        { type: 'GBP' },
        { type: 'AUD' },
        { type: 'CAD' },
        { type: 'BTC' },
        { type: 'ETH' },
        { type: 'DOGE' }
    ],
    links: [
        {
            name: 'Coins',
            left: true
        },
        { name: 'Portfolio' },
        { name: 'Overview' },
        { name: 'Trending' },
        { name: 'Exchanges' },
        { name: 'Widgets' },
        { name: 'Compare' },
        { name: 'API' },
        { name: 'Chat' }
    ]
}