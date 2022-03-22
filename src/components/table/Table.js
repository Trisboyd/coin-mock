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

    const [coinData, setCoinData] = useState(null);

    const [weekData, setWeekData] = useState(null);

    const [hourData, setHourData] = useState(null);

    const [allData, setAllData] = useState([]);

    let tempHourData = [];

    let tempWeekData = [];

    let tempArr = [];

    const [searchCoin, setSearchCoin] = useState('');

    // ____________________________________collect data from coinApi methods
    const getMarketData = coinApi.getMarketData();

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

    const getAllData = (name) => {
        let searchCoin = '';
        tempArr = [];
        getMarketData.then(response => {
            response.forEach((coin) => {
                if (coin.id === name) {
                    setCoinData(coin);
                    searchCoin = coin;
                }
                else return;
            })
            Promise.all([
                coinApi.get24Volume(searchCoin.id),
                coinApi.getWeek(searchCoin.id)
            ])
                .then(values => {
                    setHourData(values[0]);
                    setWeekData(values[1]);
                })
            // .then(() => {
            //     setHourData(tempHourData);
            //     setWeekData(tempWeekData);
            // })
        })
    }


    // _________________ collect new data onreload or every span of time
    useEffect(() => {
        getAllData('bitcoin');
    }, []);

    useEffect(() => {
        // console.log(weekData, hourData);
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
        // let tempArr = [];
        const NewData = new ParseData(coinData, weekData, hourData)
        NewData.parse();
        const finalData = NewData.currentCoin;
        console.log(finalData)
        // tempArr.push(finalData);
        // console.log(finalData)
        setAllData(finalData);
    }, [coinData, weekData, hourData]);


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
                    <Row>
                        {allData.map((data, dataIndex) => {
                            return (
                                <TableCell
                                    key={dataIndex} coin={data} />
                            )
                        })}
                    </Row>
                }
            </Head>
        </InfoTable>
    )
}

export default Table;

    //                 response.forEach((coin) => {
    //                 Promise.all([
    //                     // use coin ids to get specific market info
    //                     coinApi.get24Volume(coin.id),
    //                     coinApi.getWeek(coin.id)])
    //                     .then(values => {
    //                         // push onto temporary arrays
    //                         tempHourData.push(values[0]);
    //                         tempWeekData.push(values[1]);
    //                     })
    //                     .then(() => {
    //                         // populate state arrays with final temp arrays
    //                         // setHourData(tempHourData);
    //                         // setWeekData(tempWeekData);
    //                         $coinData.forEach((coin, coinIndex) => {
    //                             const NewData = new ParseData(coin, tempWeekData[coinIndex], tempHourData[coinIndex])
    //                             NewData.parse();
    //                             const finalData = NewData.currentCoin;
    //                             tempArr.push(finalData);
    //                             // console.log(finalData[1].symbol)
    //                         })
    //                     })
    //             })
    //             })
    //         console.log(tempArr);
    // }