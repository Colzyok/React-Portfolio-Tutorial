import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar'
import './App.css'

const App = () => {

    return (
        <Router>
            <>
               <NavBar />
            </>
        </Router>
    )
}

export default App
