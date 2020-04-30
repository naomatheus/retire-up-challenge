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
            isFiltering : false,
            isUnfiltering: false,
            range1: this.range1,
            range2: this.range2
        }
    }

    filterData = (e) => {
        let filteredData = this.state.dataCache
        let data = this.state.data
        /// filteredData is received from a linked copy of the original dataset
       
        let temp = []
        temp.push(e[0],e[1])
        
        let range1 = temp[1] - temp[0]
        if (this.state.isFiltering === false){
            this.setState({
                range1:range1,
                isFiltering: true,
                isUnfiltering: false
            })
       }
        /// filter checks and only passes years within the range set within the slider
        
        for (let i = 0; i < filteredData.length; i++){         
            
            if (filteredData[i].year < e[0]){
                // reducing year scope from end
                // distance from i to end of data set (filteredData[0])
                // calc distance to last index using year values
                let toLastIndx = filteredData[i].year - filteredData[filteredData.length-1].year
                filteredData = filteredData.splice(i,toLastIndx+1)
                // splice  (toLastIndex+1) number of elements from i to nth 
            } else if (filteredData[i].year > e[1]){
                // reducing year scope in table from the beginning of data set (filteredData.length)
                let firstIndx = filteredData[i].year - e[1]
                /* distance from i to 0 */ 
                filteredData = filteredData.splice(i,firstIndx)
                // splice number of elements from i to 0th
            } 
        }
    
        // set filtering back to false
        this.setState({
            isFiltering: false
        })

        // this.checkRange()

    }

    checkRange = () => {
        // yet to implement unfilter data functionality 
    }

    unfilterData = (e) => {
        console.log('...unfiltering')
        let data = this.state.data
        let filteredData = this.state.dataCache
        this.setState({
            isFiltering: false,
            isUnfiltering: true
        })

        for (let i = 0; i < data.length;i++){
            if (data[i].year < e[0]){
                filteredData.unshift(data[i])

            } else if (data[i].year >= e[1]){
                filteredData.push(data[i])
            }
        }
       
    }

    componentDidMount(){
        
        
    }

    render() {

        return (
            <Fragment>
                <div>Range Filter</div>
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