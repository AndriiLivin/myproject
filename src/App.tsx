import { type } from "os";
import React from "react";

import "./App.css";
import { Footer } from "./Footer";

const user = { userName: "Andrii" };

const App = () => (
  <div className="App">
    <h1> Привет мой свет {user.userName} !</h1>
    <Footer copyright=" C" />
  </div>
);

export default App;
