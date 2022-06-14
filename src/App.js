import "./App.css";
import { useState, useEffect } from "react";
import Chart from "./components/Chart"



function App() {
  const [stockData, setData] = useState(null);
  const getData = async () => {
    
    try {
      let url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=BYND&outputsize=compact&apikey=PVGXY8RVCAKABW50';
      const res = await fetch(url);
      console.log('res:', res)
      const stockData = await res.json();
      setData(stockData)
      console.log('stockdata:', stockData)

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
   getData();
  },[]);
  

  return (    
    <div>
      {stockData ? (
        <Chart data= {stockData} />
          ) : (
           null
            )}
    </div> 
  )
}

export default App;

