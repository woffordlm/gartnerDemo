import Highcharts from "highcharts/highstock";
import "./index.css";
// Load Highcharts modules
import StockChart from "../Stock/Stock";

function Chart({ data }) {
  console.log("data:", data);
  let nameData = data["Meta Data"];
  console.log("nameData:", nameData);
  data = data["Time Series (Daily)"];

  let ohlc = [],
    volume = [];

  for (const key in data) {
    const element = data[key];

    ohlc.unshift([
      key, // the date
      parseFloat(element["1. open"]), // open
      parseFloat(element["2. high"]), // high
      parseFloat(element["3. low"]), // low
      parseFloat(element["4. close"]), // close
    ]);
    volume.unshift([
      key, // the date
      parseFloat(element["5. volume"]),
    ]);
  }

  // console.log('ohlc:', ohlc)
  // console.log('volume:', volume)

  const stockOptions = {
    title: {
      text: `${nameData["2. Symbol"]} Stock Price`,
    },

    yAxis: [
      {
        labels: {
          align: "left",
        },
        title: {
          text: "",
        },
        height: "80%",
        resize: {
          enabled: true,
        },
      },
      {
        labels: {
          align: "left",
        },
        top: "80%",
        height: "20%",
        offset: 0,
      },
    ],

    xAxis: {
      labels: {
        useHTML: true,
      },
      tickInterval: 200,
    },
    tooltip: {
      shape: "square",
      headerShape: "callout",
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
            y: point.plotY,
          };
        } else {
          position = {
            x: point.series.chart.plotLeft,
            y: point.series.yAxis.top - chart.plotTop,
          };
        }

        return position;
      },
    },
    series: [
      {
        type: "ohlc",
        id: "BYND-ohlc",
        name: "BYND Stock Price",
        data: ohlc,
      },
      {
        type: "column",
        id: "BYND-volume",
        name: "BYND Volume",
        data: volume,
        yAxis: 1,
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 800,
          },
          chartOptions: {
            rangeSelector: {
              inputEnabled: false,
            },
          },
        },
      ],
    },
  };

  return (
    <div id="chart-parent">
      <StockChart options={stockOptions} highcharts={Highcharts} />
    </div>
  );
}

export default Chart;
