import Header from "../header/Header";
import Main from "../main/Main";
import { XYPlot, LineSeries, LineMarkSeries } from 'react-vis';
import { Div } from "./styledApp";

function App() {

  const data = [
    { x: 0, y: 4200 },
    { x: 1, y: 4100 },
    { x: 2, y: 42578 },
    { x: 3, y: 41887 },
    { x: 4, y: 4200 },
    { x: 5, y: 40589 },
    { x: 6, y: 39067 },
    { x: 7, y: 42000 },
    { x: 8, y: 42000 }
  ];

  return (
    <>
      <Header />
      <Main />
      <Div>
        {/* <XYPlot height={200} width={300}>
          <LineSeries data={data} color='#43dbd6A0' style={{ fill: 'none' }} />
        </XYPlot> */}
      </Div>
    </>
  );
}

export default App;
