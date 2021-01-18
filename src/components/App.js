import React from 'react';
import CardUser from './CardUser';
import './App.css';
import SelectedUser from './SelectedUser';
const App = () =>{

    return (
        <div className="app">
            <SelectedUser/>
            <CardUser/>
            
        </div>
    )
}

export default App
