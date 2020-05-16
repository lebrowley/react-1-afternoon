import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor(){
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(value){
        this.setState({ userInput: value });
    }

    assignEvenAndOdds(userInput){
        let numArray= userInput.split(',');
        let evens = [];
        let odds = [];
        
        for(let i=0; i < numArray.length; i++){
            if(numArray[i] % 2 === 0){
                evens.push(parseInt(numArray[i], 10) );
            }else {
                odds.push(parseInt(numArray[i], 10) );
            }
        }
        this.setState( {evenArray: evens, oddArray: odds} );
    }

    render(){
        return(
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }/>
                <button className='confirmationButton' onClick={ () => {this.assignEvenAndOdds(this.state.userInput)} }>Split</button>
                <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArray)}</span>
                 <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd;

//is parseInt(, 10) making it so the string is turned into a number and that number is always base 10 