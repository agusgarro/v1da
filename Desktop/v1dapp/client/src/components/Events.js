import React, {Component} from 'react';

export default class Events extends Component {
    
    state = {
projects : []
    }

    componentDidMount() {
        this.getData();
    }
    
    
    render () {
        return (
            <div>

            </div>
        )
        
    }
}