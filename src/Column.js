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

        // this.mapRangeMinMax = {}

        this.state = {
            data: stockdata,
            dataCache: stockdata,
            sliderMin: 0,
            sliderMax: 100
        }
    }

    mapRangeMinMax = () => {

        // access the year values in data
        let data = this.state.data
        
        for (let i = 0; i < data.length; i++){
            console.log(data[i].year)
            
            let min = Math.min(data[i].year)
            // set min as lowest year value
            
            let max = Math.max(data[i].year)
            // set max as highest year value
            
            if (i === data.length-1){
                // when i is at the end of stockdata array, set values in state
                console.log('hit')
                this.setState({
                    sliderMin: min,
                    sliderMax: max
                })
            }

            console.log(this.state.sliderMin)

        }
        
        
        
        
        // 
        
    }

    filterData = () => {
        let filteredData = this.state.dataCache

    }

    componentDidMount(){
        // this.mapStockData();
        this.mapRangeMinMax()
    }

    render() {
        return (
            <Fragment>
                <div>Table will go here inside of Column component</div>
                < Range min={0} max={100} defaultValue={[this.state.sliderMin,this.state.sliderMax]} tipFormatter={value => `${value}`}/>
                < BootstrapTable props={this.state.data}/>
            </Fragment>
        )
    }



}

export default Column;