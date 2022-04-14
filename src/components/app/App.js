import Header from "../header/Header";
import Main from "../main/Main";
import { useState } from 'react';

function App() {

  const [pageCurrency, setPageCurrency] = useState({
    name: 'usd',
    symbol: '$'
  });

  const switchCurrency = (sign) => {
    setPageCurrency(sign)
  }

  return (
    <>
      <Header
        switchCurrency={switchCurrency}
        currency={pageCurrency} />
      <Main
        currency={pageCurrency} />
    </>
  );
}

export default App;
