import React, { Component } from 'react'
import Die from './Die'
import './RollDice.scss'

class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props) {
        super(props)
        this.state = { die1: 'one', die2: 'one', rolling: false }
    }
    roll = () => {
        let sides = this.props.sides
        let randSide1 = sides[Math.floor(Math.random() * sides.length)]
        let randSide2 = sides[Math.floor(Math.random() * sides.length)]
        this.setState({ die1: randSide1, die2: randSide2, rolling: true})

        setTimeout(() => {
            this.setState({ rolling: false })
        }, 1000);
    }
    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die 
                        die={this.state.die1}
                        rolling={this.state.rolling}
                    />
                    <Die 
                        die={this.state.die2}
                        rolling={this.state.rolling}
                    />
                </div>
                <button className="roll-btn" onClick={this.roll} disabled={this.state.rolling && true}>
                    {this.state.rolling ? 'ROLLING...' : 'ROLL THE DICE'}
                </button>
            </div>
        )
    }
}

export default RollDice