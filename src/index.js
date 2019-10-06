import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./style/index.scss";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
const W3CWebSocket = require("websocket").w3cwebsocket;

class WebSocket {
  constructor() {
    this.uri = uri;
  }

  connect(path) {
    console.log(path);
    const soc = new W3CWebSocket(path);
    soc.onopen = () => {
      console.log("siema");
    };
    soc.onerror = () => {
      console.log("error");
    };
  }
}
const siec = new WebSocket();
siec.connect("ws://siema");

const messages = {
  send: 1,
  check: 2
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
