import { useState, useEffect } from "react";
import Chart from "../components/Chart/Chart";
import Sidebar from "../components/Sidebar/Sidebar";

function Home({setSearchName, searchName}) {

  const [stockData, setData] = useState(null);
  
  console.log("searchName:!!!!!!", searchName);
  const getData = async () => {
    try {
      let url = `/api/stock/${searchName}`;
      const res = await fetch(url);
      console.log("res:", res);
      const stockData = await res.json();
      setData(stockData);
      console.log("stockdata:", stockData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  },[searchName]);

  return (
    <div>
      <Sidebar setSearchName={setSearchName} />
      {stockData ? <Chart data={stockData} /> : null}
    </div>
  );
}

export default Home;
