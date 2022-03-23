import { useState, useEffect } from 'react'
// __________________________________________components
import Controls from "../controls/Controls";
import Table from "../table/Table";
import Graphs from "../graphs/Graphs";
// ____________________________________________classes
import coinApi from '../../utilities/CoinApi';
import ParseData from '../../utilities/ParseData';

// ______________________________ styled components
import {
    MainSection,
    InputWrapper,
    Input,
    Button,
    InputSection,
    InputTitle,
    MainDiv
}
    from "./styledMain";



const Main = () => {

    // TABLE______________________________________________________TABLE 

    const [coinData, setCoinData] = useState(null);

    const [weekData, setWeekData] = useState(null);

    const [hourData, setHourData] = useState(null);

    const [allData, setAllData] = useState([]);

    // ____________________________collect data from coinApi methods
    const getMarketData = coinApi.getMarketData();

    // ___________________________API calls to get necessary data for
    // ___________________________creation of table row
    const getAllData = (name) => {
        let searchCoin = '';
        getMarketData.then(response => {
            response.forEach((coin) => {
                if (coin.id === name.toLowerCase()
                    ||
                    coin.symbol === name.toLowerCase()
                    ||
                    coin.name.toLowerCase() === name.toLowerCase()) {
                    setCoinData(coin); // first batch of info
                    searchCoin = coin;
                }
                else return;
            })
            Promise.all([
                coinApi.get24Volume(searchCoin.id),
                coinApi.getWeek(searchCoin.id)
            ])
                .then(values => {
                    setHourData(values[0]); // data for price change in hour
                    setWeekData(values[1]); // data for price change in day
                    getWeekData(values[1]); // data for graphs
                })
        })
    }


    // _________________ collect new data onreload or every span of time
    // __________________currently this is unnecesary since the search is
    // __________________ input based
    // useEffect(() => {
    //     getAllData();
    // }, []);

    // _____________________populate new instantiation of ParseData with
    // _____________________ with data from state variables
    useEffect(() => {
        if (!coinData) {
            console.log('Coin Data not here')
            return
        }
        if (!weekData) {
            console.log('Week Data not here')
            return
        }
        if (!hourData) {
            console.log('Hour Data not here')
            return
        }
        const NewData = new ParseData(coinData, weekData, hourData)
        NewData.parse();
        const finalData = NewData.currentCoin;
        setAllData(finalData);
    }, [coinData, weekData, hourData]);

    // GRAPHS____________________________________________________________GRAPHS

    // ___________________________________state variables for market data
    const [priceData, setPriceData] = useState([]);

    const [marketCap, setMarketCap] = useState([]);

    const [volumeData, setVolumeData] = useState([]);


    // _________________________________api call for gathering market data
    // const getWeekData = (coin) => {
    //     // gather data then insert into state variables
    //     coin = coin.toLowerCase();
    //     coinApi.getWeek(coin).then(response => {
    //         let priceArr = response.prices.map((num, numIndex) => {
    //             return { x: numIndex, y: num[1].toFixed(2) }
    //         })
    //         let marketArr = response.market_caps.map((num, numIndex) => {
    //             return { x: numIndex, y: num[1].toFixed(2) }
    //         })
    //         let volumeArr = response.total_volumes.map((num, numIndex) => {
    //             return { x: numIndex, y: num[1].toFixed(2) }
    //         })
    //         setPriceData(priceArr);
    //         setMarketCap(marketArr);
    //         setVolumeData(volumeArr);
    //     })
    // }

    const getWeekData = (data) => {
        let priceArr = data.prices.map((num, numIndex) => {
            return { x: numIndex, y: num[1].toFixed(2) }
        })
        let marketArr = data.market_caps.map((num, numIndex) => {
            return { x: numIndex, y: num[1].toFixed(2) }
        })
        let volumeArr = data.total_volumes.map((num, numIndex) => {
            return { x: numIndex, y: num[1].toFixed(2) }
        })
        setPriceData(priceArr);
        setMarketCap(marketArr);
        setVolumeData(volumeArr);
    }

    // INPUT______________________________________________________ INPUT
    // all api calls hinge on what input is submitted to the search

    const [searchItem, setSearchItem] = useState('');

    // ________________________________change state variable based on input
    const handleChange = (event) => {
        setSearchItem(event.target.value);
    };

    const submitSearch = (event) => {
        event.preventDefault();
        getAllData(searchItem);
        // getWeekData(searchItem);
    }

    return (
        <MainSection>
            {allData[0] &&
                <Graphs
                    priceData={priceData}
                    marketCap={marketCap}
                    volumeData={volumeData}
                />
            }
            <MainDiv>
                {allData[0] &&
                    <>
                        <Controls />
                        <Table
                            allData={allData}
                        />
                    </>
                }
                <InputSection>
                    <InputTitle>
                        Enter any coin <br /> for market data
                    </InputTitle>
                    <InputWrapper>
                        <Input
                            type='text'
                            placeholder='Enter coin by full name'
                            onChange={handleChange}
                        />
                        <Button
                            type='submit'
                            onClick={submitSearch}
                        >Search
                        </Button>
                    </InputWrapper>
                </InputSection>
            </MainDiv>
        </MainSection>
    )
}

export default Main;