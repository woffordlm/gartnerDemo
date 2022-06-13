import "./App.css";
import { useState, useEffect } from "react";
import { Highcharts } from "highcharts/modules/stock";
import HighchartsReact from 'highcharts-react-official';

function App() {

  function testing (stockData) {
    console.log('stockData:', stockData)
    console.log("youuuuu did it ")

    
     // create the chart
  //    Highcharts.stockChart('container', {


  //     rangeSelector: {
  //         selected: 2
  //     },

  //     title: {
  //         text: 'AAPL Stock Price'
  //     },

  //     series: [{
  //         type: 'ohlc',
  //         name: 'AAPL Stock Price',
  //         data: stockData,

  //         dataGrouping: {
  //             units: [[
  //                 'week', // unit name
  //                 [1] // allowed multiples
  //             ], [
  //                 'month',
  //                 [1, 2, 3, 4, 6]
  //             ]]
  //         }
  //     }]
  // });

          
  }
  
  const [stockData, setData] = useState([]);
  const getData = async () => {
    
    try {
      // let url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=BYND&outputsize=full&apikey=PVGXY8RVCAKABW50';
      let url = 'https://demo-live-data.highcharts.com/aapl-ohlcv.json';
      const res = await fetch(url);
      console.log('res:', res)
      const stockdata = await res.json();
      setData(stockData)
      console.log('stockdata:', stockdata)
      testing(stockData)

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
   getData();
  }, );
  
  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    
    <div className="App">
    <HighchartsReact highcharts={Highcharts} options={{}} />
  </div>
    
  );
}

export default App;
