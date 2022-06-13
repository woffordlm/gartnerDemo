


const try = () => {
    fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=PVGXY8RVCAKABW50")
    .then((res) => res.json())
    .then((data) => setData(data.message));


  
} 
   

try();