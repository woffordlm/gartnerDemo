import { useState, useEffect } from "react";
import Chart from "../components/Chart/Chart";
import Sidebar from "../components/Sidebar/Sidebar";

function Home() {

  const [stockData, setData] = useState(null);
  const [searchName, setSearchName] = useState("IBM");
  
  const getData = async () => {
    try {
      let url = `/api/stock/${searchName}`;
      const res = await fetch(url);
      const stockData = await res.json();
      setData(stockData);
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
      {!stockData ? null : <Chart data={stockData} />}
    </div>
  );
}

export default Home;
