import Header from "../header/Header";
import Main from "../main/Main";
import { useState } from 'react';

function App() {

  // Currencies________________________________
  const [pageCurrency, setPageCurrency] = useState({
    name: 'usd',
    symbol: '$'
  });

  const switchCurrency = (sign) => {
    setPageCurrency(sign)
  }

  // AUTHORIZATION_______________________________________AUTHORIZATION

  const [registerPopup, setRegisterPopup] = useState(false);

  const openRegister = () => {
    setRegisterPopup(true);
  }

  const closeRegister = () => {
    setRegisterPopup(false);
  }

  return (
    <>
      <Header
        switchCurrency={switchCurrency}
        currency={pageCurrency}
        openRegister={openRegister} />
      <Main
        authOpen={registerPopup}
        currency={pageCurrency}
        closeRegister={closeRegister}
      />
    </>
  );
}

export default App;
