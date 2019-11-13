import React, {Component} from 'react'

class Sum extends Component {
    constructor(){
        super()

        this.state = {
            num1: 0,
            num2: 0,
            numSum: null
        }
    }

    changeNumOne(val){
        this.setState({num1: parseInt(val, 10)})
    }

    changeNumTwo(val){
        this.setState({num2: parseInt(val, 10)})
    }

    handleSum(num1, num2){
        this.setState({numSum: num1 + num2})
    }

    render(){
        return(
            <div className='puzzleBox sumPB'>
                <input className='inputLine' onChange={(e) => this.changeNumOne(e.target.value)}/>
                <input className='inputLine' onChange={(e) => this.changeNumTwo(e.target.value)}/>
                <button className='confirmationButton' onClick={ () => this.handleSum(this.state.num1, this.state.num2)}>Add</button>
                <span className='resultsbox'>Sum: {this.state.numSum}</span>
            </div>
        )
    }
}

export default Sum