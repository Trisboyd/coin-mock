import { useState, useEffect } from 'react'
// __________________________________________components
import Controls from "../controls/Controls";
import Table from "../table/Table";
import Graphs from "../graphs/Graphs";
import AuthPopup from "../auth/AuthPopup";

// ____________________________________________classes
import coinApi from '../../utilities/CoinApi';
import ParseData from '../../utilities/ParseData';

// ______________________________ styled components
import {
    MainSection,
    MainDiv
}
    from "./styledMain";



const Main = (props) => {

    // TABLE______________________________________________________TABLE 

    const [allData, setAllData] = useState([]);

    const [cleanData, setCleanData] = useState([]);

    // ____________________________collect data from coinApi methods
    const getMarketData = coinApi.getMarketData(props.currency.name);

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
    }, [props.currency]);

    useEffect(() => {
        if (allData) {
            setCleanData([]);
            allData.map((coin) => {
                const NewParse = new ParseData(coin, props.currency);
                NewParse.parse();
                const finalData = NewParse.currentCoin;
                setCleanData(cleanData => [...cleanData, finalData]);
            })
        }
    }, [allData]);

    // AUTHORIZATION_______________________________________________________AUTHORIZATION


    // GRAPHS____________________________________________________________GRAPHS

    // ___________________________________state variables for market data
    const [priceData, setPriceData] = useState([]);

    const [volumeData, setVolumeData] = useState([]);

    const [popupData, setPopupData] = useState();

    const [graphPopup, setGraphPopup] = useState(false);

    const showGraphs = () => {
        setGraphPopup(true);
    }

    const closePopups = () => {
        setGraphPopup(false);
        props.closeRegister(false);
    }

    // ________________________________________format date to be read by newsApi
    let dateArr = [];

    const formatDate = () => {
        for (let i = 7; i > -1; i--) {
            let date = new Date()
            let newDate = date.getDate() - i;
            date.setDate(newDate);
            const day = date.getDate();
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            dateArr.push(`${month}-${day}-${year}`)
        }
    }
    formatDate();

    // _________________________________api call for gathering market data
    const getWeekData = (coin) => {
        // gather data then insert into state variables
        coin = coin.toLowerCase();
        coinApi.getWeek(coin, props.currency.name).then(response => {
            let priceArr = response.prices.map((num, numIndex) => {
                return { day: dateArr[numIndex], price: num[1].toFixed(2) }
            })
            // let marketArr = response.market_caps.map((num, numIndex) => {
            //     return { x: numIndex, y: num[1].toFixed(2) }
            // })
            let volumeArr = response.total_volumes.map((num, numIndex) => {
                return { day: dateArr[numIndex], volume: num[1].toFixed(2) }
            })
            setPriceData(priceArr);
            setVolumeData(volumeArr);
        })
    }

    const cleanPopupData = (data) => {
        setPopupData({
            name: data[1].word,
            price: data[2].value,
            market: data[3].value,
            high: data[4].value,
            change: data[5].value,
            color: data[5].negative,
        })
    }

    const handleCoinClick = (data) => {
        cleanPopupData(data);
        getWeekData(data[1].id);
        showGraphs();
    }

    return (
        <MainSection>
            <AuthPopup
                open={props.authOpen}
                closePopups={closePopups} />
            {popupData &&
                <Graphs
                    open={graphPopup}
                    data={popupData}
                    closeGraphs={closePopups}
                    priceData={priceData}
                    volumeData={volumeData}
                    currency={props.currency}
                />
            }
            <MainDiv>
                {cleanData &&
                    <>
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