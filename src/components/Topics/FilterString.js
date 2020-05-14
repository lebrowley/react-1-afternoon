import React, {Component} from 'react';

class FilterString extends Component {
    constructor(){
        super();

        this.state= {
            names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jenny', 'Mark', 'Maddy'],
            userInput: '',
            filteredNames: []
    };
} 

handleChange(val){
    this.setState({userInput: val})
}

filteredNames(userInput){
    let names = this.state.names;
    let filteredNames = [];

    for(let i=0; i < names.length; i++){
        if(names[i].includes(userInput)){
            filteredNames.push(names[i])
        }
    }
    this.setState({filteredNames: filteredNames})
}

    render() {
        return(
            <div className='puzzleBox filterString PB'>
                <h4>Filter String</h4>
                <span className='puzzleText'> Names: {JSON.stringify(this.state.names, null, 10)}</span>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }/>
                <button className='confirmationButton' onClick={ (e) => this.filteredNames(this.state.userInput) }>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(this.state.filteredNames, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString;

