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
    MainDiv
}
    from "./styledMain";



const Main = () => {

    // TABLE______________________________________________________TABLE 

    const [allData, setAllData] = useState([]);

    const [cleanData, setCleanData] = useState([]);

    // ____________________________collect data from coinApi methods
    const getMarketData = coinApi.getMarketData();

    // ___________________________API calls to get necessary data for
    // ___________________________creation of table row
    const getAllData = (name) => {
        getMarketData.then(response => {
            setAllData(response);
        })
    }


    // _________________ collect new data onreload or every span of time
    useEffect(() => {
        getAllData();
    }, []);

    useEffect(() => {
        if (allData) {
            allData.map((coin) => {
                const NewParse = new ParseData(coin);
                NewParse.parse();
                const finalData = NewParse.currentCoin;
                setCleanData(cleanData => [...cleanData, finalData]);
            })
        }
    }, [allData]);

    // _____________________populate new instantiation of ParseData with
    // _____________________ with data from state variables
    // useEffect(() => {
    //     if (!coinData) {
    //         console.log('Coin Data not here')
    //         return
    //     }
    //     if (!weekData) {
    //         console.log('Week Data not here')
    //         return
    //     }
    //     if (!hourData) {
    //         console.log('Hour Data not here')
    //         return
    //     }
    // const NewData = new ParseData(coinData, weekData, hourData)
    // NewData.parse();
    // const finalData = NewData.currentCoin;
    // setAllData(finalData);
    // }, [coinData, weekData, hourData]);

    // GRAPHS____________________________________________________________GRAPHS

    // ___________________________________state variables for market data
    const [priceData, setPriceData] = useState([]);

    const [volumeData, setVolumeData] = useState([]);

    const [graphPopup, setGraphPopup] = useState(false);

    const showGraphs = () => {
        setGraphPopup(true);
    }


    // _________________________________api call for gathering market data
    const getWeekData = (coin) => {
        // gather data then insert into state variables
        coin = coin.toLowerCase();
        // console.log(coin);
        coinApi.getWeek(coin).then(response => {
            let priceArr = response.prices.map((num, numIndex) => {
                return { x: numIndex, y: num[1].toFixed(2) }
            })
            // let marketArr = response.market_caps.map((num, numIndex) => {
            //     return { x: numIndex, y: num[1].toFixed(2) }
            // })
            let volumeArr = response.total_volumes.map((num, numIndex) => {
                return { x: numIndex, y: num[1].toFixed(2) }
            })
            setPriceData(priceArr);
            setVolumeData(volumeArr);
        })
    }

    // const cleanWeekData = (data) => {
    //     let priceArr = data.prices.map((num, numIndex) => {
    //         return { x: numIndex, y: num[1].toFixed(2) }
    //     })
    //     let marketArr = data.market_caps.map((num, numIndex) => {
    //         return { x: numIndex, y: num[1].toFixed(2) }
    //     })
    //     setPriceData(priceArr);
    //     setMarketCap(marketArr);
    // }

    const handleCoinClick = (data) => {
        getWeekData(data.id);
        showGraphs();
    }

    return (
        <MainSection>
            <Graphs
                open={graphPopup}
                priceData={priceData}
                volumeData={volumeData}
            />
            <MainDiv>
                {cleanData &&
                    <>
                        <Controls />
                        <Table
                            allData={cleanData}
                            handleCoinClick={handleCoinClick}
                        />
                    </>
                }
            </MainDiv>
        </MainSection >
    )
}

export default Main;