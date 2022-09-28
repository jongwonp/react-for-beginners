import { useEffect, useState } from "react";

function App() {
  const [loading, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState();
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(reponse => reponse.json())
    .then(json => {
      setCoins(json);
      setLoding(false);
    })
  },[])
  const inputDollar = (event) => setDollar(event.target.value)

  
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      $ <input onChange={inputDollar} type="number"></input>
      <hr/>
      {loading ? <strong>loading...</strong> : <select>
        {coins.map(coin => {
        return <option key={coin.id} name={coin.name} value={coin.quotes.USD.price}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>})}
      </select>
      }
      <div id="convert">{dollar}</div>
    </div>
  )
}

export default App;

// 달러와 비율을 알기 위해 달러를 입력하면 select에서 현재 선택된 option에 있는 값을 받아서 몇 달러인지 알려주는 기능 추가하기