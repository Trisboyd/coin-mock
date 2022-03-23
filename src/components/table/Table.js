import { useState, useEffect } from 'react';
import { Head, HeadData, InfoTable, Row } from './styledTable';
import { TableData } from '../../constants/tableConst';
import TableCell from '../tablecell/TableCell';
import coinApi from '../../utilities/CoinApi';
import ParseData from '../../utilities/ParseData';

const {
    head,
} = TableData;

const Table = (props) => {

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
            </Head>
            {props.allData &&
                <Row>
                    {props.allData.map((data, dataIndex) => {
                        return (
                            <TableCell
                                key={dataIndex} coin={data} />
                        )
                    })}
                </Row>
            }
        </InfoTable>
    )
}

export default Table;

// IN CASE _______________________________________________________

    // const [coinData, setCoinData] = useState(null);

    // const [weekData, setWeekData] = useState(null);

    // const [hourData, setHourData] = useState(null);

    // const [allData, setAllData] = useState([]);

    // // ____________________________collect data from coinApi methods
    // const getMarketData = coinApi.getMarketData();

    // // ___________________________API calls to get necessary data for
    // // ___________________________creation of table row
    // const getAllData = (name) => {
    //     let searchCoin = '';
    //     getMarketData.then(response => {
    //         response.forEach((coin) => {
    //             if (coin.id === name) {
    //                 setCoinData(coin); // first batch of info
    //                 searchCoin = coin;
    //             }
    //             else return;
    //         })
    //         Promise.all([
    //             coinApi.get24Volume(searchCoin.id),
    //             coinApi.getWeek(searchCoin.id)
    //         ])
    //             .then(values => {
    //                 setHourData(values[0]); // data for price change in hour
    //                 setWeekData(values[1]); // data for price change in day
    //             })
    //     })
    // }


    // // _________________ collect new data onreload or every span of time
    // useEffect(() => {
    //     getAllData(props.coin);
    // }, []);

    // // _____________________populate new instantiation of ParseData with
    // // _____________________ with data from state variables
    // useEffect(() => {
    //     // console.log(weekData, hourData);
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
    //     const NewData = new ParseData(coinData, weekData, hourData)
    //     NewData.parse();
    //     const finalData = NewData.currentCoin;
    //     console.log(finalData)
    //     setAllData(finalData);
    // }, [coinData, weekData, hourData]);