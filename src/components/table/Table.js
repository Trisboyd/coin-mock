import { useState, useEffect, useMemo } from 'react';
import { Head, HeadData, InfoTable, Row } from './styledTable';
import { TableData } from '../../constants/tableConst';
import TableCell from '../tablecell/TableCell';
import coinApi from '../../utilities/CoinApi';
import ParseData from '../../utilities/ParseData';

const {
    head,
} = TableData;

const Table = () => {

    const [coinData, setCoinData] = useState([]);

    const [weekData, setWeekData] = useState([]);

    const [hourData, setHourData] = useState([]);

    // const weekData = [];

    // const hourData = [];

    const [allData, setAllData] = useState([]);

    let tempHourData = [];

    let tempWeekData = [];

    let tempArr = [];

    // ____________________________________collect data from coinApi methods
    const getMarketData = coinApi.getMarketData();

    const getAllData = () => {
        tempArr = [];
        getMarketData.then(
            response => {
                const $coinData = response;
                response.forEach((coin) => {
                    Promise.all([
                        // use coin ids to get specific market info
                        coinApi.get24Volume(coin.id),
                        coinApi.getWeek(coin.id)])
                        .then(values => {
                            // push onto temporary arrays
                            tempHourData.push(values[0]);
                            tempWeekData.push(values[1]);
                        })
                        .then(() => {
                            // populate state arrays with final temp arrays
                            // setHourData(tempHourData);
                            // setWeekData(tempWeekData);
                            $coinData.forEach((coin, coinIndex) => {
                                const NewData = new ParseData(coin, tempWeekData[coinIndex], tempHourData[coinIndex])
                                NewData.parse();
                                const finalData = NewData.currentCoin;
                                tempArr.push(finalData);
                                // console.log(finalData[1].symbol)
                            })
                        })
                })
            })
        console.log(tempArr);
    }

    // _________________ collect new data onreload or every span of time
    // useEffect(() => {
    //     getAllData();
    // }, []);

    // useEffect(() => {
    //     setAllData(tempArr);
    // }, []);

    // useEffect(() => {
    //     // console.log(weekData, hourData);
    //     if (!coinData) {
    //         console.log('Coin Data not here')
    //         return
    //     }
    //     if (weekData.length < 10) {
    //         console.log('Week Data not here')
    //         console.log({ weekData: weekData.length })
    //         return
    //     }
    //     if (hourData.length < 10) {
    //         console.log('Hour Data not here')
    //         return
    //     }
    //     if (!allData) {
    //         return
    //     }
    //     let tempArr = [];
    //     coinData.forEach((coin, coinIndex) => {
    //         const NewData = new ParseData(coin, weekData[coinIndex], hourData[coinIndex])
    //         NewData.parse();
    //         const finalData = NewData.currentCoin;
    //         tempArr.push(finalData);
    //         // console.log(finalData[1].symbol)
    //     })
    //     setAllData(tempArr);
    // }, [coinData, weekData, hourData, allData]);

    // const createTable = () => {
    //     console.log(allData);
    //     allData.map((coin) => {
    //         return (
    //             <Row>
    //                 {coin.map((data) => {
    //                     return (
    //                         <TableCell coin={data} />
    //                     )
    //                 })}
    //             </Row>
    //         )
    //     })
    // }

    return (
        <InfoTable>
            <Head>
                <Row>
                    {head.map((data, dataIndex) => {
                        return (
                            <HeadData key={dataIndex}>
                                {data.name}
                            </HeadData>
                        )
                    })}
                </Row>
                {allData &&
                    allData.map((coin, coinIndex) => {
                        return (
                            <Row key={coinIndex}>
                                {coin.map((data, coinIndex) => {
                                    return (
                                        <TableCell
                                            key={coinIndex} coin={data} />
                                    )
                                })}
                            </Row>
                        )
                    })
                }
            </Head>
        </InfoTable>
    )
}

export default Table;