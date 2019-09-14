import React, { Component } from 'react'
import './Die.scss'

class Die extends Component {
    render() {
        return (
            <div className="Die">
                <i className={`fa fa-dice-${this.props.die} fa-10x ${this.props.rolling && 'shake'}`}></i>
            </div>
        )
    }
}

export default Die 