import React, {Component} from 'react';

// Topics

import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'

class TopicBrowser extends Component {
    render(){
        return (
        <div>
            <EvenAndOdd/>
            <FilterObject/>
            <FilterString/>
            <Palindrome/>
            <Sum/>
        </div>
        )  
    }
}

export default TopicBrowser;

//so what's the point of this file? couldn't we have done all of this in App.js??