import React from "react";
import { JsonRpc } from "eosjs";
import "./App.css";
// import axios from "axios";
import Button from "./Components/Button";
import List from "./Components/BlockList"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: [],
      loading: true,
      load: false
    };
  }

  fetchData() {
    let url = 'https://api.eosnewyork.io';
    this.rpc = new JsonRpc(url, { fetch });
      this.getBlocks();
  }

  
  render() {

    return (
      <>
        <Button />
        <List />
      </>
    );
  }
}

export default App;
