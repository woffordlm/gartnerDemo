
import Highcharts from 'highcharts/highstock'

// Load Highcharts modules
import StockChart from './Stock';

function Chart ({data}) {

  data = data['Time Series (Daily)']

  let ohlc = [],
  volume = [];
 
for (const key in data) {
  const element = data[key];
  console.log('element:', element)
  
  ohlc.unshift([
    key, // the date
    parseFloat(element['1. open']), // open
    parseFloat(element['2. high']), // high
    parseFloat(element['3. low']), // low
    parseFloat(element['4. close']) // close
]);
  volume.unshift([
    key, // the date
    parseFloat(element['5. volume'])
]);
    
}


console.log('ohlc:', ohlc)
console.log('volume:', volume)



const stockOptions = {
  title: {
    text: "BYND Stock Price"
  },

  yAxis: [{
    labels: {
        align: 'left'
    },
    title:{
      text: ""
    },
    height: '80%',
    resize: {
        enabled: true
    }
}, {
    labels: {
        align: 'left'
    },
    top: '80%',
    height: '20%',
    offset: 0
  }],

  xAxis: {

  labels: {
    useHTML: true
  },
  tickInterval: 200
  },
  tooltip: {
    shape: 'square',
    headerShape: 'callout',
    borderWidth: 0,
    shadow: false,
    positioner: function (width, height, point) {
        var chart = this.chart,
            position;

        if (point.isHeader) {
            position = {
                x: Math.max(
                    // Left side limit
                    chart.plotLeft,
                    Math.min(
                        point.plotX + chart.plotLeft - width / 2,
                        // Right side limit
                        chart.chartWidth - width - chart.marginRight
                    )
                ),
                y: point.plotY
            };
        } else {
            position = {
                x: point.series.chart.plotLeft,
                y: point.series.yAxis.top - chart.plotTop
            };
        }

        return position;
    }
  },
  series: [{
    type: 'ohlc',
    id: 'BYND-ohlc',
    name: 'BYND Stock Price',
    data: ohlc
}, {
    type: 'column',
    id: 'BYND-volume',
    name: 'BYND Volume',
    data: volume,
    yAxis: 1
  }],
  responsive: {
    rules: [{
        condition: {
            maxWidth: 800
        },
        chartOptions: {
            rangeSelector: {
                inputEnabled: false
            }
        }
    }]
 
  }
}
  

    return (  
           
        // <HighchartsReact  options={stockOptions} highcharts={Highcharts} />
        <StockChart options={stockOptions} highcharts={Highcharts} />

  
    )
}

export default Chart




// yAxis: [
//   {
//     height: "75%",
//     labels: {
//       align: "right",
//       x: -3,
//     },
//     title: {
//       text: "BYND",
//     },
//   },
//   {
//     top: "75%",
//     height: "25%",
//     labels: {
//       align: "right",
//       x: -3,
//     },
//     offset: 0,
//     title: {
//       text: "MACD",
//     },
//   },
// ],
// rangeSelector: {
//     selected: 2
// },

// title: {
//     text: 'BYND Stock Price'
// },

// series: [{
//     type: 'ohlc',
//     name: 'BYND Stock Price',
//     data: data,
//     dataGrouping: {
//         units: [[
//             'week', // unit name
//             [1] // allowed multiples
//         ], [
//             'month',
//             [1, 2, 3, 4, 6]
//         ]]
//     }
// }]


// data = [
  // [
  // 1592227800000,
  // 83.31,
  // 86.42,
  // 83.14,
  // 85.75,
  // 138808800
  // ],
  // [
  // 1592314200000,
  // 87.86,
  // 88.3,
  // 86.18,
  // 88.02,
  // 165428800
  // ],
  // [
  // 1592400600000,
  // 88.79,
  // 88.85,
  // 87.77,
  // 87.9,
  // 114406400
  // ],
  // [
  // 1592487000000,
  // 87.85,
  // 88.36,
  // 87.31,
  // 87.93,
  // 96820400
  // ],
  // [
  // 1592573400000,
  // 88.66,
  // 89.14,
  // 86.29,
  // 87.43,
  // 264476000
  // ],
  // [
  // 1592832600000,
  // 87.83,
  // 89.86,
  // 87.79,
  // 89.72,
  // 135445200
  // ],
  // [
  // 1592919000000,
  // 91,
  // 93.1,
  // 90.57,
  // 91.63,
  // 212155600
  // ]
  // ]