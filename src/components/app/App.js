import Header from "../header/Header";
import Main from "../main/Main";
import { XYPlot, VerticalBarSeries, LineMarkSeries } from 'react-vis';
import { Div } from "./styledApp";
import coinApi from '../../utilities/CoinApi';
import { useEffect, useState } from 'react'

function App() {

  const [priceData, setPriceData] = useState([]);

  const [marketCap, setMarketCap] = useState([]);

  const [volumeData, setVolumeData] = useState([]);

  const [searchCoin, setSearchCoin] = useState('');


  const getWeekData = () => {
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

  useEffect(() => {
    getWeekData();
    // getAggMarket();
  }, []);

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

  return (
    <>
      <Header />
      <Main />
      {priceData &&
        <Div>
          <XYPlot height={200} width={300}>
            <LineMarkSeries data={priceData} color='#43dbd6A0' style={{ fill: 'none' }} />
          </XYPlot>
        </Div>
      }
      {marketCap &&
        <Div>
          <XYPlot height={200} width={300}>
            <VerticalBarSeries data={marketCap} color='#43dbd6A0' style={{ fill: 'none' }} />
          </XYPlot>
        </Div>
      }
      {volumeData &&
        <Div>
          <XYPlot height={200} width={300}>
            <LineMarkSeries data={volumeData} color='#43dbd6A0' style={{ fill: 'none' }} />
          </XYPlot>
        </Div>
      }
    </>
  );
}

export default App;
