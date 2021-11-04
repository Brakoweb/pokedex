import React from "react";
import '../styles/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout.jsx';
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";

const App = () =>{
    return(
        <BrowserRouter>
        <Layout>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </Layout>
        </BrowserRouter>
    );
}

export default App;