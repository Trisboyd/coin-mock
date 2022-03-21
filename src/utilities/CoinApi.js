class Api {
    constructor({ baseUrl }) {
        this._url = baseUrl;
    }

    // retrieve market data for all coins
    getMarketData(currency = 'usd') {
        return fetch(`${this._url}/coins/markets?vs_currency=${currency}&per_page=10`)
            .then(response => {
                return this._checkResponse(response)
            })
    }

    get24Volume(coin, currency = 'usd') {
        return fetch(`${this._url}/coins/${coin}/market_chart?vs_currency=${currency}&days=1&interval=hourly`)
            .then(response => {
                return this._checkResponse(response)
            })
    }

    getWeek(coin, currency = 'usd') {
        return fetch(`${this._url}/coins/${coin}/market_chart?vs_currency=${currency}&days=7&interval=daily`)
            .then(response => {
                return this._checkResponse(response)
            })
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }
        else {
            return Promise.reject(`Error: ${res.status}`)
        }
    }
}

const coinApi = new Api({
    baseUrl: 'https://agile-cove-62596.herokuapp.com/https://api.coingecko.com/api/v3'
})

export default coinApi;