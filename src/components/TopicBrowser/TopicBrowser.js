import React, {Component} from 'react'

import EvenAndOdd from '/Users/spencerlee/Devmountain/week3/react-1-afternoon/src/components/Topics/EvenAndOdd'
import FilterObject from '/Users/spencerlee/Devmountain/week3/react-1-afternoon/src/components/Topics/FilterObject'
import FilterString from '/Users/spencerlee/Devmountain/week3/react-1-afternoon/src/components/Topics/FilterString'
import Palindrome from '/Users/spencerlee/Devmountain/week3/react-1-afternoon/src/components/Topics/Palindrome'
import Sum from '/Users/spencerlee/Devmountain/week3/react-1-afternoon/src/components/Topics/Sum'

class TopicBrowser extends Component {
    render(){
        return(
            <div>
                <EvenAndOdd />
                <FilterObject />
                <FilterString />
                <Palindrome />
                <Sum />
            </div>
        )
    }
}

export default TopicBrowser