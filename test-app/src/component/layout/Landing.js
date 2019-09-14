// Import React
import React, { Fragment, Component } from 'react'

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            date: new Date(),
            count: 0
        }

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.timer = setInterval(() => { this.tick() }, 1000)
    }

    componentWillUnmount() {

    }

    tick() {
        this.setState(() => ({
            date: new Date()
        }))
    }

    handleClick() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    render() {
        return (
            <Fragment>
                <div className="jumbotron">
                    <h1 className="display-4">Test App</h1>
                    <h2 className="display-6">{this.state.date.toLocaleTimeString()}</h2>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button" onClick={this.handleClick}>{this.state.count}</a>
                </div>
            </Fragment>
        )
    }
}

export default Landing