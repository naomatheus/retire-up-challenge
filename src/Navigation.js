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
            sliderMax: 100
        }
    
    }

    _mapRangeMinMax = (stockdata) => {
        // access the year values in data
        let data = this.state.data;

        // create pseudo properties in this object using get syntax
        
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].year);
            let min = Math.min(data[i].year);
            // set min as lowest year value
            let max = Math.max(data[i].year);
            // set max as highest year value
            if (i === data.length - 1) {
                // when i is at the end of stockdata array, set values in state
                console.log('hit');
                this.setState({
                    sliderMin: min,
                    sliderMax: max
                });
            }
            console.log(this.state.sliderMin);
        }
    };
    get mapRangeMinMax() {
        return this._mapRangeMinMax;
    }
    set mapRangeMinMax(value) {
        this._mapRangeMinMax = value;
    }

    componentDidMount(){
        this.mapRangeMinMax()
    }
    render(){
        return(
            <Fragment>
                
                <div className='nav-container--maxwidth'>Navigation Top layer
                    < Row />
                    <div className='nav-table row--static'>Stock Information in Navigation component</div>
                    
                    <div className='nav-table-row--responsive'>
                        
                        <Column />
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