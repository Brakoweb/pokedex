import React from "react";
import '../styles/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout.jsx';
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import AppContext from "../context/AppContext.js";
import useInitialState from "../hooks/useInitialState.js";

const App = () =>{
    const initialState = useInitialState();
    return(
        <AppContext.Provider value={initialState}>
           <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter> 
        </AppContext.Provider>
        
    );
}

export default App;