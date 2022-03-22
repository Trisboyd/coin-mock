import Header from "../header/Header";
import Main from "../main/Main";
import { XYPlot, VerticalBarSeries, LineMarkSeries } from 'react-vis';
import { Div } from "./styledApp";
import coinApi from '../../utilities/CoinApi';
import { useEffect, useState } from 'react'
import Graphs from "../graphs/Graphs";

function App() {



  return (
    <>
      <Header />
      <Graphs />
      <Main />
    </>
  );
}

export default App;
