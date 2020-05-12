import React, {Component} from 'react';

class FilterObject extends Component {
    constructor(){
        super();

        this.state= {
            employees: [
                {
                    name: 'Joe',
                    title: 'Mr.',
                    age: 45
                },
                {
                    name: 'Schrader',
                    age: 65,
                    hairColor: 'brown'
                },
                {
                    name: 'Carly',
                    title: 'Ms.'
                }
            ],

            userInput: '',
            filteredEmployees: []
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    filteredEmployees(prop){
        let employees = this.state.employees;
        let filteredEmployees = [];

        for(let i= 0; i < employees.length; i++){
            if(employees[i].hasOwnProperty(prop)){
                filteredEmployees.push(employees[i])
            }
        }
        this.setState({filteredEmployees: filteredEmployees})
    }

    render(){
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'> Original: { JSON.stringify(this.state.employees, null, 10) }</span>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }/>
                <button className='confirmationButton' onClick={ () => this.filteredEmployees(this.state.userInput) }>Filter</button>
                <span className='resultsBox filterObjectRB'> Filtered: { JSON.stringify(this.filteredEmployees, null, 10) }</span>
            </div>
        )
    }
}

export default FilterObject;