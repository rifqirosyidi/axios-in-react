import React, { Component } from 'react';
import axios from 'axios';
import { format } from 'util';

class PersonInput extends Component {
    
    state = {
        name: ''
    }

    handleOnChange= event => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        const user = {
            name: this.state.name
        }

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res)
            })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="inputName" >Person Name</label>
                <input id="inputName" type="text" name="name" onChange={this.handleOnChange} />
                <button type="submit">Sumbit</button>
            </form>
        )
    }
}

export default PersonInput;