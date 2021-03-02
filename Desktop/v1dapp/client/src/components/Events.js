import React, {Component} from 'react';
import axios from 'axios';

export default class Events extends Component {


    state = {
        events : []
    }

    getData = () => {
        axios.get('/api/events')
        .then(response => {
            console.log(response);
        })
        .catch(err=>console.log(err))
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