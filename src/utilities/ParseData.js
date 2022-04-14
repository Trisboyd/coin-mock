class ParseData {

    constructor(coinData, currency) {
        this._coin = coinData;
        this._currency = currency;
        this._hourDiff = null;
        this.currentCoin = [];
    }

    print = () => {
        console.log(this._coin);
        console.log(this._currency);
    }

    _convertNum = (num) => {
        if (num > 1000000000) {
            return `${(num / 1000000000).toFixed(2)} B`;
        }
        else if (num > 1000000) {
            return `${(num / 1000000).toFixed(2)} M`;
        }
        else return `$${num}`;
    }

    _removeSign = (num) => {
        if (num < 0) {
            num = num * -1;
        }
        return num.toFixed(2);
    }

    _showSign = (num) => {
        if (num < 0) {
            return 'red';
        }
        else return 'green';
    }

    parse = () => {
        this.currentCoin = [
            {
                name: 'rank',
                value: this._coin.market_cap_rank,
                align: true
            },
            {
                name: 'data',
                symbol: this._coin.symbol.toUpperCase(),
                word: this._coin.name,
                image: this._coin.image,
                id: this._coin.id
            },
            {
                name: 'price',
                value: `${this._currency.symbol}${this._coin.current_price}`
            },
            {
                name: 'market',
                value: `${this._currency.symbol}${this._convertNum(this._coin.market_cap)}`
            },
            {
                name: 'ath',
                value: `${this._currency.symbol}${this._coin.ath}`
            },
            {
                name: 'day',
                value: `${this._removeSign(this._coin.market_cap_change_percentage_24h)}%`,
                negative: this._showSign(this._coin.market_cap_change_percentage_24h)
            },
        ]
        return this.currentCoin;
    }
}

export default ParseData;







