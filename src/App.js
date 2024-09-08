import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CitiesTable from './components/CitiesTable';
import Weatherpage from './components/Weatherpage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact component={CitiesTable} />
                <Route path="/weather/:cityId" component={Weatherpage} />
            </Routes>
        </Router>
    );
};

export default App;
