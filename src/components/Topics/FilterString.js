import React, {Component} from 'react';

class FilterString extends Component {
    constructor(){
        super();

        this.state= {
            names: ['james', 'jessica', 'melody', 'tyler', 'blake', 'jenny', 'mark', 'maddy'],
            userInput: '',
            filteredNames: []
    };
} 

    render() {
        return(
            <div className='puzzleBox filterString PB'>
                <h4>Filter String</h4>
                <span className='puzzleText'> Names: {JSON.stringify(this.state.names, null, 10)}</span>
                <input className='inputLine' />
                <button className='confirmationButton'></button>
                <span className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(this.state.filteredNames, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString;



// ['happy', 'go', 'lucky', 'early', 'bird', 'gets', 'the', 'worm']