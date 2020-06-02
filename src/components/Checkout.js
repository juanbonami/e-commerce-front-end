import React, { Component } from 'react'
import axios from 'axios';

export default class Checkout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            comment: ''
        }
    }


    // componentDidMount() {
    //     axios.get('http://localhost:8080/addComment');

    // }





    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <input type="text" name="comment" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
