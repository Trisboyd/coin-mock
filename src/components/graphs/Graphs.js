import {
    XYPlot,
    VerticalBarSeries,
    LineMarkSeries
}
    from 'react-vis';
import { useState } from 'react';
import { Bottom, Number, Section, Text, Top, WeekText, Wrapper } from './styledGraphs';

const Graphs = (props) => {

    // _______________________________________day of data being viewed
    const [priceDay, setPriceDay] = useState('');

    const [marketDay, setMarketDay] = useState('');

    const [volumeDay, setVolumeDay] = useState('');

    // _________________________________________ whether graph is being viewed or not
    const [mousePrice, setMousePrice] = useState(false);

    const [mouseMarket, setMouseMarket] = useState(false);

    const [mouseVolume, setMouseVolume] = useState(false);

    // _________________________________________ price of section of graph being viewed
    const [currentPrice, setCurrentPrice] = useState('');

    const [currentMarket, setCurrentMarket] = useState('');

    const [currentVolume, setCurrentVolume] = useState('');

    // ________________________________________current date
    const curDate = new Date();

    //  _______________________ date object for graph dates
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
                    {props.priceData &&
                        <XYPlot
                            height={100}
                            width={228}
                            style={{ position: 'relative' }}>
                            <LineMarkSeries
                                data={props.priceData}
                                color='#43dbd6A0'
                                // style={{ fill: 'none' }}
                                onNearestXY={(value, index) => {
                                    formatDate(curDate, index.index);
                                    setCurrentPrice(value.y)
                                }} />
                            <LineMarkSeries
                                data={props.priceData}
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
                    <Text>DAILY VOLUMES</Text>
                    <Number>{`$${currentVolume}`}</Number>
                </Top>
                <Bottom>
                    {
                        props.volumeData &&
                        <XYPlot
                            height={100}
                            width={228}
                            style={{ position: 'relative' }}>
                            <VerticalBarSeries
                                data={props.volumeData}
                                color='#43dbd6A0'
                                style={{ fill: 'black', overflow: 'hidden' }}
                                onSeriesMouseOver={() => {
                                    setMouseVolume(true)
                                }}
                                onSeriesMouseOut={() => {
                                    setMouseVolume(false)
                                }}
                                onNearestXY={(value, index) => {
                                    formatDate(curDate, index.index);
                                    setCurrentVolume(convertNum(value.y))
                                }} />
                            <WeekText>{mouseVolume ? volumeDay : '7d'}</WeekText>
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
                        props.marketCap &&
                        <XYPlot
                            height={100}
                            width={228}
                            style={{ position: 'relative' }}>
                            <LineMarkSeries
                                data={props.marketCap}
                                color='#43dbd6A0'
                                // style={{ fill: 'none' }}
                                onNearestXY={(value, index) => {
                                    formatDate(curDate, index.index);
                                    setCurrentMarket(convertNum(value.y))
                                }} />
                            <LineMarkSeries
                                data={props.volumeData}
                                strokeWidth={50}
                                stroke='transparent'
                                color='transparent'
                                style={{ fill: 'none' }}
                                onSeriesMouseOver={() => {
                                    setMouseMarket(true)
                                }}
                                onSeriesMouseOut={() => {
                                    setMouseMarket(false)
                                }}
                            />
                            <WeekText>{mouseMarket ? marketDay : '7d'}</WeekText>
                        </XYPlot>
                    }
                </Bottom>
            </Wrapper>
        </Section>
    )
}

export default Graphs;

    // const getCoinData = (name) => {
    //     name = name.toLowerCase();
    //     coinApi.getMarketData().then(response => {
    //         response.forEach(res => {
    //             if (res.id === name) {
    //                 setSearchCoin(res)
    //             }
    //         })
    //     })
    //     console.log(searchCoin)
    // }

        // useEffect(() => {
    //     getWeekData(searchCoin);
    // }, [searchCoin]);