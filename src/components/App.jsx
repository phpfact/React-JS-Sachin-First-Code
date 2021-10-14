import React from 'react'
import { Route, Switch } from 'react-router'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Error from './pages/Error'

const App = () => {
    return <>
       <Header/>
        <Switch>
            <Route exact path='/' component={Page1} />
            <Route path='/page2' component={Page2} />
            <Route path='/page3' component={Page3} />
            <Route path='/page4' component={Page4} />
            <Route exact path='/page1' component={Page1} />

            {/* http://localhost:3000/page1/username */}
            <Route path='/page1/username' component={Page3} />
            <Route component={Error} />
        </Switch>

    </>
}

export default App;