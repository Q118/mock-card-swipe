import React from 'react'
import './App.css'
// import Switch from 'react-ios-switch'
// import Cards from './components/Cards'
import Header from './components/header'
import Simple from './components/Simple'

function App() {


    return (
            <div className='app'>
                <div className='row'>
                    <Header />
                </div>
                <Simple />
                {/* <p style={{ color: '#fff' }}>Show advanced example</p> */}
                {/* <Switch checked={showAdvanced} onChange={setShowAdvanced} /> */}
            </div>
    )
}

export default App
