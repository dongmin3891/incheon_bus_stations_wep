import React from "react";
import { Route,Redirect, Switch } from "react-router-dom";
import BusStation from "./components/BusStation";
import Home from "./components/Home";






const Main = () => {
  console.log("render")

  return (
    <>
    <div>
      <Route path="/" component={Home} />
    </div>
    </>
  )
}

export default Main;