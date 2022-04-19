import React from "react";
import "./style.css"

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 1,
            character: {}
        }
        this.handlePlus = this.handlePlus.bind(this)
        //this.handleMinus = this.handleMinus.bind(this)
    }

    handlePlus() {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

    handleMinus = () => {
        this.setState(prevState => {
            return {count: prevState.count - 1}
        })
    }

    geStarWarsCharacter = (id) => {
        fetch(`https://swapi.dev/api/people/${id}`)
        .then(res => res.json())
        .then(data => this.setState({character: data}))
    }

    componentDidMount() {
        this.geStarWarsCharacter(this.state.count)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            this.geStarWarsCharacter(this.state.count)
        }
    }

    render() {
        return (
            <>
            <div className="counter">
                <button className="counter-minus" onClick={this.handleMinus}>-</button>
                <div className="counter-count">
                    <h1>{this.state.count}</h1>
                </div>
                <button className="counter-plus" onClick={this.handlePlus}>+</button>
            </div>
            <h1>{this.state.count < 1 ? "no charactor" : this.state.character.name || "Loading..."}</h1>
            </>
        )
    }
}