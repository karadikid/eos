import React, { useState, useEffect } from "react";
import { JsonRpc } from "eosjs";
import "./App.css";
import Button from "./Components/Button";
import List from "./Components/List";
import Loader from "./Components/Loader";

const App = () => {
  const [blocks, setBlocks] = useState([]);

  // function reloadBlocks(e) {
  //   e.preventDefault();
  //   fetchData();
  //   setBlocks(blocks);
  // }

  async function fetchData() {
    let blockChainData;
    let currentBlock;
    let pastBlock;
    const rpc = new JsonRpc("https://api.eosnewyork.io", { fetch });
    try {
      blockChainData = await rpc.get_info();
      console.log(blockChainData);
      currentBlock = await rpc.get_block(
        blockChainData.head_block_num
      );
      blocks.push(currentBlock);
      console.log(blocks);
    } catch (error) {
      console.error(JSON.stringify(error));
    }

    // let i = 0;

    // do {
    //   try {
    //     pastBlock = await rpc.get_block(currentBlock.previous);
    //     blocks.push(fetchDetails(pastBlock));
    //   } catch (error) {}
    // } while (i < 10);
    // console.log(blocks);
  }

  function fetchDetails(block) {
    let blockDetails = {
      id: block.id,
      timestamp: block.timestamp,
      transactions: block.transactions.length,
      details: JSON.stringify(block)
    };
    return blockDetails;
  }

  useEffect(() => {
    fetchData();
  });

  if (blocks.length < 1) {
    return <Loader />;
  } else {
    return (
      <>
        <Button />
        <List />
      </>
    );
  }
};

export default App;
