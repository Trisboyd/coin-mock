import heart from '../images/heart.svg';

class ParseData {

    constructor(coinData, weekData, hourData) {
        this._coin = coinData;
        this._week = weekData;
        this._hourDiff = null;
        this.currentCoin = [];
    }

    print = () => {
        console.log(this._coin);
        console.log(this._week);
        console.log(this._hour);
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

    // _24Volume = () => {
    //     const length = this._week.total_volumes.length;
    //     const volume = this._week.total_volumes[length - 1][1];
    //     return this._convertNum(volume);
    // }

    // _hourChange = () => {
    //     const length = this._hour.prices.length;
    //     const hour1 = this._hour.prices[length - 2][1];
    //     const hour2 = this._hour.prices[length - 1][1];
    //     if (hour2 > hour1) {
    //         let change = hour2 / hour1;
    //         this._hourDiff = 'green';
    //         return `${change.toFixed(2)}%`
    //     }
    //     else {
    //         let change = hour1 / hour2;
    //         this._hourDiff = 'red';
    //         return `${change.toFixed(2)}%`
    //     }
    // }

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
                value: `$${this._coin.current_price}`
            },
            {
                name: 'market',
                value: `$${this._convertNum(this._coin.market_cap)}`
            },
            {
                name: 'ath',
                value: `$${this._coin.ath}`
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







