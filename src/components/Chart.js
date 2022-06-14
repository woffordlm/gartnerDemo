
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official';



function Chart ({data}) {
console.log('data:', data)
data = data['Time Series (Daily)']
console.log('data:', data)
const stockOptions = {
 
    yAxis: [
      {
        height: "75%",
        labels: {
          align: "right",
          x: -3,
        },
        title: {
          text: "AAPL",
        },
      },
      {
        top: "75%",
        height: "25%",
        labels: {
          align: "right",
          x: -3,
        },
        offset: 0,
        title: {
          text: "MACD",
        },
      },
    ],
    rangeSelector: {
        selected: 2
    },

    title: {
        text: 'BYND Stock Price'
    },

    series: [{
        type: 'ohlc',
        name: 'BYND Stock Price',
        data: data,
        dataGrouping: {
            units: [[
                'week', // unit name
                [1] // allowed multiples
            ], [
                'month',
                [1, 2, 3, 4, 6]
            ]]
        }
    }]
    // series: [
    //   {
    //     data: data,
          
    //     type: "ohlc",
    //     name: "AAPL Stock Price",
    //     id: "aapl",
    //   },
    //   {
    //     type: "pivotpoints",
    //     linkedTo: "aapl",
    //     zIndex: 0,
    //     lineWidth: 1,
    //     dataLabels: {
    //       overflow: "none",
    //       crop: false,
    //       y: 4,
    //       style: {
    //         fontSize: 9,
    //       },
    //     },
    //   },
    //   {
    //     type: "macd",
    //     yAxis: 1,
    //     linkedTo: "aapl",
    //   },
    // ],
  };
  

    return (  
       
        <HighchartsReact  options={stockOptions} highcharts={Highcharts} />
  
    )
}

export default Chart