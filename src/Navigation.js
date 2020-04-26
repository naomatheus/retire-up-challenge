import React, {Component,Fragment} from 'react';
import Column from './Column.js'
import Row from './Row.js'
import './navigation.css'
import Card from './Card.js'
import stockdata from './data/stockdata.json' 

class Navigation extends Component {
    constructor(props){
        super(props)

        this.state = {
            
            data: stockdata,
            sliderMin:0,
            sliderMax: 100,
            setValues : {
                // access the year values in data
                min : 0,
                max: 0,
                // create pseudo properties in this object using get syntax

                checkData () {
                    for (let i = 0; i < stockdata.length; i++) {
                        console.log(stockdata[i].year);
                        this.min = Math.min(stockdata[i].year);
                        // set min as lowest year value
                        this.max = Math.max(stockdata[i].year);
                        // set max as highest year value
                        if (i === stockdata.length - 1) {
                            // when i is at the end of stockdata array, set values in state
                            console.log(this.min,this.max);
                        }
                        // console.log(this.state.sliderMin);
                    }
                }
        
                
            }
        }
    
    }

    
    // get mapRangeMinMax() {
    //     return this._mapRangeMinMax;
    // }
    // set mapRangeMinMax(value) {
    //     this._mapRangeMinMax = value;
    // }

    componentWillMount(){
        this.state.setValues.checkData()

        this.setState({
            sliderMin: this.state.setValues.min,
            sliderMax: this.state.setValues.max
        })

    }
    render(){
        return(
            <Fragment>
                
                <div className='nav-container--maxwidth'>Navigation Top layer
                    < Row />
                    <div className='nav-table row--static'>Stock Information in Navigation component</div>
                    
                    <div className='nav-table-row--responsive'>
                        
                        <Column min={this.state.sliderMin} max={this.state.sliderMax} />
                        <Card />
                        <Card />
                        <Card />

                    </div>

                </div>
            </Fragment>
        )
    }

}


export default Navigation;