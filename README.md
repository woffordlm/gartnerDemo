<h1 align="center">Stock Portfolio</h1>

<p align="left">This application displays stock data for 5 different companies. Upon page load, the user will see the default data for IBM. The user can change the chart data by using the select box on the side bar. The user can change the dispaly of the data by manipulating the scroll bar on the bottom of the chart. The user can view all of the metrics by hovering over the graph.</p>

 <img src="./public/photos/screenShot1.jpg">

## Authors
- [Luke Wofford](https://github.com/woffordlm)

## Deployment

- [Github](https://github.com/woffordlm/gartnerDemo)

<img src="./public/photos/screenShot2.jpg">

## Installation

<p>After installing npm packages, type npm start and open your browser to localhost:3000.</p>
<p> This application is meant to be run along side the gartner-demo server. Open up the server and type npm start into the command line.</p>

- [Github/server](https://github.com/woffordlm/gartner-server)

## Explanation of this application's logic

The applications logic runs in the following sequence:

Simplified explanation:

When the user selects a stock symbol, the application makes a request to a server and expects back data for the stock that the user selected. The application then formats this data and displays it in the form of a chart. 


A Deeper Explanation

1. App.js renders and the app is then routed to the home component
2. Before the home jsx renders, a fetch request is sent to an endpoint on the gartner-server, the returned data is saved in state. The jsx renders and the data is passed on to the Chart component. 
3. The chart component is where the data in formatted so that it can be used with highcharts. Once fomatted, we save the appropriate parts within the stockOptions variable and this is passed on to the StockChart component. 
4. The stockChart component imports the HighChartsReact element and all of the data is passed into this element, which results in a chart being rendered on the screen using the appropriate data. 
5. The sidebar component has the abililty to change state and will trigger a rerender if a new search is made. If a new search is made, the updated state value triggers a new fetch that then results in a new chart. 
          

## Technologies

<img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
<img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">

<br>

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![Npm package version](https://badgen.net/npm/v/express)](https://npmjs.com/package/express)
<img src="https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg">




## License

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)