import { XYPlot, VerticalBarSeries, LineMarkSeries } from 'react-vis';
import { useState, useEffect } from 'react';
import { Bottom, Number, Section, Text, Top, WeekText, Wrapper } from './styledGraphs';
import coinApi from '../../utilities/CoinApi';

const Graphs = (props) => {

    const [priceData, setPriceData] = useState([]);

    const [marketCap, setMarketCap] = useState([]);

    const [volumeData, setVolumeData] = useState([]);

    const [searchCoin, setSearchCoin] = useState('');

    const [priceDay, setPriceDay] = useState('');

    const [marketDay, setMarketDay] = useState('');

    const [volumeDay, setVolumeDay] = useState('');

    const [mousePrice, setMousePrice] = useState(false);

    const [mouseMarket, setMouseMarket] = useState(false);

    const [mouseVolume, setMouseVolume] = useState(false);

    const [currentPrice, setCurrentPrice] = useState('');

    const [currentMarket, setCurrentMarket] = useState('');

    const [currentVolume, setCurrentVolume] = useState('');

    console.log(priceData[7])

    const getWeekData = () => {
        // props.coin instead of bitcoin here
        coinApi.getWeek('bitcoin').then(response => {
            let priceArr = response.prices.map((num, numIndex) => {
                return { x: numIndex, y: num[1].toFixed(2) }
            })
            let marketArr = response.market_caps.map((num, numIndex) => {
                return { x: numIndex, y: num[1].toFixed(2) }
            })
            let volumeArr = response.total_volumes.map((num, numIndex) => {
                return { x: numIndex, y: num[1].toFixed(2) }
            })
            setPriceData(priceArr);
            setMarketCap(marketArr);
            setVolumeData(volumeArr);
        })
    }

    // useEffect(() => {
    //     getWeekData();
    // }, []);


    const getCoinData = (name) => {
        name = name.toLowerCase();
        coinApi.getMarketData().then(response => {
            response.forEach(res => {
                if (res.id === name) {
                    setSearchCoin(res)
                }
            })
        })
        console.log(searchCoin)
    }

    // getAggMarket();
    // getCoinData('ethereum')

    // ________________________________________current date
    const curDate = new Date();

    const dateObject = {
        7: 0,
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
        1: 6,
        0: 7
    }

    // ________________________________________format date to be read by newsApi
    const formatDate = (date, index) => {
        const newDate = date.getDate() - dateObject[index];
        date.setDate(newDate);
        const day = date.getDate();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        setPriceDay(`${month}-${day}-${year}`)
        setMarketDay(`${month}-${day}-${year}`)
        setVolumeDay(`${month}-${day}-${year}`)
    }

    const convertNum = (num) => {
        if (num > 1000000000) {
            return `${(num / 1000000000).toFixed(2)} B`;
        }
        else if (num > 1000000) {
            return `${(num / 1000000).toFixed(2)} M`;
        }
        else return `$${num}`;
    }

    return (
        <Section>
            <Wrapper>
                <Top>
                    <Text>Prices</Text>
                    <Number>{`$${currentPrice}`}</Number>
                </Top>
                <Bottom>
                    {priceData &&
                        <XYPlot
                            height={100}
                            width={228}
                            style={{ position: 'relative' }}>
                            <LineMarkSeries
                                data={priceData}
                                color='#43dbd6A0'
                                style={{ fill: 'none' }}
                                onNearestXY={(value, index) => {
                                    formatDate(curDate, index.index);
                                    setCurrentPrice(value.y)
                                }} />
                            <LineMarkSeries
                                data={priceData}
                                strokeWidth={50}
                                stroke='transparent'
                                color='transparent'
                                style={{ fill: 'none' }}
                                onSeriesMouseOver={() => {
                                    setMousePrice(true)
                                }}
                                onSeriesMouseOut={() => {
                                    setMousePrice(false)
                                }}
                            />
                            <WeekText>
                                {mousePrice ? priceDay : '7d'}
                            </WeekText>
                        </XYPlot>
                    }
                </Bottom>
            </Wrapper>
            <Wrapper>
                <Top>
                    <Text>MARKET CAP</Text>
                    <Number>{`$${currentMarket}`}</Number>
                </Top>
                <Bottom>
                    {
                        marketCap &&
                        <XYPlot
                            height={100}
                            width={228}
                            style={{ position: 'relative' }}>
                            <VerticalBarSeries
                                data={marketCap}
                                color='#43dbd6A0'
                                style={{ fill: 'black', overflow: 'hidden' }}
                                onSeriesMouseOver={() => {
                                    setMouseMarket(true)
                                }}
                                onSeriesMouseOut={() => {
                                    setMouseMarket(false)
                                }}
                                onNearestXY={(value, index) => {
                                    formatDate(curDate, index.index);
                                    setCurrentMarket(convertNum(value.y))
                                }} />
                            <WeekText>{mouseMarket ? marketDay : '7d'}</WeekText>
                        </XYPlot>
                    }
                </Bottom>
            </Wrapper>
            <Wrapper>
                <Top>
                    <Text>VOLUMES</Text>
                    <Number>{`$${currentVolume}`}</Number>
                </Top>
                <Bottom>
                    {
                        volumeData &&
                        <XYPlot
                            height={100}
                            width={228}
                            style={{ position: 'relative' }}>
                            <LineMarkSeries
                                data={volumeData}
                                color='#43dbd6A0'
                                style={{ fill: 'none' }}
                                onNearestXY={(value, index) => {
                                    formatDate(curDate, index.index);
                                    setCurrentVolume(convertNum(value.y))
                                }} />
                            <LineMarkSeries
                                data={volumeData}
                                strokeWidth={50}
                                stroke='transparent'
                                color='transparent'
                                style={{ fill: 'none' }}
                                onSeriesMouseOver={() => {
                                    setMouseVolume(true)
                                }}
                                onSeriesMouseOut={() => {
                                    setMouseVolume(false)
                                }}
                            />
                            <WeekText>{mouseVolume ? volumeDay : '7d'}</WeekText>
                        </XYPlot>
                    }
                </Bottom>
            </Wrapper>
        </Section>
    )
}

export default Graphs;