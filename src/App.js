import "./App.css";
import { useState, useEffect } from "react";
// import Highcharts from 'highcharts/highstock'
// import HighchartsReact from 'highcharts-react-official';
import Chart from "./components/Chart";


function App() {


  const [stockData, setData] = useState(null);
  
 
  const getData = async () => {
    
    try {
      let url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=BYND&outputsize=full&apikey=PVGXY8RVCAKABW50';
      // let url = 'https://demo-live-data.highcharts.com/aapl-ohlcv.json';
      const res = await fetch(url);
      console.log('res:', res)
      const stockData = await res.json();
      setData(stockData)
      console.log('stockdata:', stockData)
      // test(stockData)

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
   getData();
  }, []);
  

  return (
    
    <Chart data= {stockData}/>
    
    
  );
}

export default App;

