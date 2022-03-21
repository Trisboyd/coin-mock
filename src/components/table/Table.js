import { useState, useEffect } from 'react';
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

    const [allData, setAllData] = useState([]);

    let tempHourData = [];

    let tempWeekData = [];

    // ____________________________________collect data from coinApi methods
    const getMarketData = coinApi.getMarketData();

    const getAllData = () => {
        getMarketData.then(
            response => {
                setCoinData(response)
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
                        .finally(() => {
                            // populate state arrays with final temp arrays
                            setHourData(tempHourData);
                            setWeekData(tempWeekData);
                        })
                })
            })
    }

    useEffect(() => {
        // console.log({ coinData, hourData, weekData });
        if (!coinData) {
            return
        }
        if (!weekData || weekData.length < 10) {
            return
        }
        if (!hourData || hourData.length < 10) {
            return
        }
        let tempArr = [];
        coinData.forEach((coin, coinIndex) => {
            const AllData = new ParseData(coin, weekData[coinIndex], hourData[coinIndex])
            AllData.parse();
            const finalData = AllData.currentCoin;
            tempArr.push(finalData);
            // console.log(finalData[1].symbol)
        })
        setAllData(tempArr);
    }, [coinData, weekData, hourData])

    // _________________ collect new data onreload or every span of time
    useEffect(() => {
        getAllData();
    }, []);

    return (
        <InfoTable>
            <Head>
                <Row>
                    {head.map((data) => {
                        return (
                            <HeadData>
                                {data.name}
                            </HeadData>
                        )
                    })}
                </Row>
                {allData &&
                    allData.map((coin) => {
                        return (
                            <Row>
                                {coin.map((data) => {
                                    return (
                                        <TableCell coin={data} />
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