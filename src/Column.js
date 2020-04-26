import React, { Component, Fragment } from 'react';
import stockdata from './data/stockdata.json' 
import BootstrapTable from './Table.js'
import Slider from 'rc-slider'
import {Range} from 'rc-slider'
import 'rc-slider/assets/index.css'
import 'rc-tooltip/assets/bootstrap.css'
import Tooltip from 'rc-tooltip'

const createSliderWithTooltip = Slider.createSliderWithTooltip;
Range = createSliderWithTooltip(Slider.Range)

class Column extends Component {
    constructor(props){
        super(props)

        this.state = {
            data: stockdata,
            dataCache: stockdata
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
            // console.log(data)

            return data
        })
        
        
    }

    filterData = () => {
        let filteredData = this.state.dataCache

    }

    componentDidMount(){
        this.mapStockData();
    }

    render() {
        return (
            <Fragment>
                <div>Table will go here inside of Column component</div>
                < Range />
                < BootstrapTable props={this.state.data}/>
            </Fragment>
        )
    }



}

export default Column;