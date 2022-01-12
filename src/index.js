import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import App2 from "./routes/App2";
import App3 from "./routes/App3";
import Header from "./Header.js"

const rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="blue" element={<App2 />} />
            <Route path="yellow" element={<App3 />} />
        </Routes>
    </BrowserRouter>
,rootElement);