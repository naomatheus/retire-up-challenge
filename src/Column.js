import React, { Component, Fragment } from 'react';
import stockdata from './data/stockdata.json' 
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table-next'
import Table from './Table.js'

class Column extends Component {
    constructor(props){
        super(props)

        this.state = {
            data: stockdata
        }
    }

    mapStockData = () => {
        // set isMapping to true
        this.setState({
            ...this.state,
            isMapping: true,
        })
        // use map() to loop over all items in JSON obj

        const mappedData = this.state.data.map((data) => {
            console.log(data)

            
        })
        
        
    }

    componentDidMount(){
        this.mapStockData();
    }

    render() {
        return (
            <Fragment>
                <div>Table will go here inside of Column component</div>
                <Table props={this.state.data}/>
            </Fragment>
        )
    }



}

export default Column;