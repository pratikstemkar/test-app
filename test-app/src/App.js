// Import React
import React, { Fragment } from 'react'

// Import from react-router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Component
import Navbar from './component/layout/Navbar'
import Landing from './component/layout/Landing'
import Login from './component/auth/Login'
import Register from './component/auth/Register'

const App = () => {
    return (
        <Fragment>
            <Router>
                <Navbar xsr="srgserg" rts="sad" />
                <section className="container">
                    <Route exact path="/" component={Landing} />
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                    </Switch>
                </section>
            </Router>
        </Fragment>
    )
}

export default App