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
            // sliderMin: 0,
            // sliderMax: 100
        }
    }

    filterData = (e) => {
        let filteredData = this.state.dataCache
        let data = this.state.data
        /// filteredData is received from a cache copy of the original dataset
        // function filterData receives year range values from the range
       
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
        console.log('...filtering',e) 
        console.log(range1,'range1')

        // filter for min from beginning j++
        for (let i = 0; i < filteredData.length; i++){         
            // on the first 
            


            if (filteredData[i].year < e[0]){
                // reducing year scope from end
                // distance from i to end of data set (filteredData.length)
                // calc using year values
                let toLastIndx = filteredData[i].year - filteredData[filteredData.length-1].year
                // console.log(toLastIndx)
                filteredData = filteredData.splice(i,toLastIndx+1)
                // splice number of elements from i to nth 
            } else if (filteredData[i].year > e[1]){
                // reducing year scope in table from the beginning
                let firstIndx = filteredData[i].year - e[1]
                /* distance from i to 0 */ 
                filteredData = filteredData.splice(i,firstIndx)
                // splice number of elements from i to 0th
            } 
        }
        let temp2 = []
        temp2.push(e[0],e[1])
        let range2 = temp2[1] - temp2[0]

        

        // if range is larger after filteringEvents, add elements back
        this.setState({
            isFiltering: false
        })

        console.log(this.state.range1,'<--range1')
        this.checkRange()

    }

    checkRange = () => {

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
        // console.log(this.state.dataCache, '<-- unfiltered data in state')

    }

    componentDidMount(){
        // this.mapStockData();
        // this.mapRangeMinMax()
        
    }

    render() {

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