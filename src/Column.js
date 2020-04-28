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
        this.wrapper = React.createRef();

        this.state = {
            data: stockdata,
            dataCache: stockdata,
            isFiltering : false
            // sliderMin: 0,
            // sliderMax: 100
        }
    }

    filterData = (e) => {
        let filteredData = this.state.dataCache
        /// filteredData is received from a cache copy of the original dataset
        console.log('...filtering',e) // filter receives year range values from the range
        this.setState({
            isFiltering: true
        })
        /// filter checks and only passes years within the range set within the slider
        
        // filter for min from beginning j++
        for (let i = 0; i < filteredData.length; i++){

            console.log(filteredData[i].year)                
            if (filteredData[i].year < e[0]){
                // reducing year scope from end
                filteredData = filteredData.splice((filteredData.length-1),1)
            } 
            
            else if (filteredData[i].year > e[1]){
                // reducing year scope in table from the beginning
                console.log(`${e[1]} is greater  than or equal to ${filteredData[i].year} filteredData`)
                
                console.log(filteredData,'<-- just before setting state in filter function')
                
                
                let firstIndx = filteredData[i].year - e[1]
                /* distance from i to 0 */ 
                filteredData = filteredData.splice(i,firstIndx)
                // splice number of elements from i to 0th
            }
        }
        

        console.log(this.state.dataCache,'<-- filtered data in state')
            
        if (this.setState.isFiltering === true) {
            for (let i = 0; i < e.length; i++){
                // set limits on the cached data 

                // access the filteredData variable that is a copy of all stockdata

            }

        }
        


    }

    componentDidMount(){
        // this.mapStockData();
        // this.mapRangeMinMax()
        
    }

    render() {

        console.log(this.props.min)

        return (
            <Fragment>
                <div>Table will go here inside of Column component</div>
                < Range ref={this.wrapper} onChange={this.filterData} onAfterChange={this.filterData} min={this.props.min} max={this.props.max} defaultValue={[this.props.min,this.props.max]} tipFormatter={value => `${value}`}/>
                < BootstrapTable props={this.state.data}/>

                { this.state.isFiltering ? 
                    

                    <BootstrapTable props={this.state.dataCache}/>
                
                : false }
            </Fragment>
        )
    }



}

export default Column;