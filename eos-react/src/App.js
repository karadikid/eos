import React, { useState, useEffect } from "react";
import { JsonRpc } from "eosjs";
import "./App.css";
// import axios from "axios";
import Button from "./Components/Button";
import List from "./Components/List";

const App = () => {
  const [blocks, setBlocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  async function fetchData() {
    let blockChainData;
    const rpc = new JsonRpc('https://api.eosnewyork.io', { fetch });
    try {
      blockChainData = await rpc.get_info();
      console.log(blockChainData)
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  };

  useEffect(() => {
   fetchData();
  })
  return (
    <>
      <Button />
      <List />
    </>
  );
};

export default App;
