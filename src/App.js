import React from 'react'
import './App.css'
// import Switch from 'react-ios-switch'
// import Cards from './components/Cards'
import Header from './components/header'

import Simple from './components/Simple'

function App() {


    return (
        <div className='app'>
            <Header />
            <Simple />
            {/* <div className='row'> */}

                {/* <p style={{ color: '#fff' }}>Show advanced example</p> */}
                 {/* <Switch checked={showAdvanced} onChange={setShowAdvanced} /> */}
            {/* <Cards />  */}
            {/* just to see if its rendering */}
            {/* </div> */}
        </div>
    )
}

export default App
