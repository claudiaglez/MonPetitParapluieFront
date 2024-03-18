import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "../components/views/HomeView";
import FormView from "../components/views/FormView";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView/>}></Route>
        <Route path='/form' element={<FormView/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
