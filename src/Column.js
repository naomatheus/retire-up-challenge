import React, { Component } from 'react';


class Column extends Component {
    constructor(props){
        super(props)

        this.state = {
            isFetching: false,
            data: this.data
        }
    }

    render() {
        return (

            <div>Table will go here inside of Column component</div>
        )
    }



}

export default Column;