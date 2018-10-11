import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import Main from "./main";

export default function App() {
    return (
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    );
}
