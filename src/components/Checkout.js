import React, { Component } from 'react'
import axios from 'axios';

export default class Checkout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            comment: ""
        }
        // this.submitHandler = this.submitHandler.bind(this)
        // this.changeHandler = this.changeHandler.bind(this)
    }

    

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    

     submitHandler = (e) => {
        // post method works in postman but seems to fail when i run the code...

        e.preventDefault()

        axios.get('http://localhost:8080/commentById/22')
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

        axios.post('http://localhost:8080/addComment', this.state)
            
            .then(function (response) {
            console.log(response)
        })
            .then(function (data) {
            console.log('post request response data', data)
        })
    }


// http://localhost:8080/addComment



    render() {
        const { name, comment } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="name" value={name} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="comment" value={comment} onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
