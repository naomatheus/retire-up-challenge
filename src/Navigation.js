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
                    let temp = []

                    for (let i = 0; i < stockdata.length; i++) {
                        // push each element of stockdata into array 
                        temp.push(stockdata[i].year)

                    }
                    this.min = Math.min(...temp)
                    // set min as lowest year value
                    this.max = Math.max(...temp)
                    // set max as highest year value
                    console.log(Math.min(...temp))
                }
            }
        }
    
    }

    componentWillMount(){
        // sets values in the slider based on data set
        this.state.setValues.checkData()

        this.setState({
            sliderMin: this.state.setValues.min,
            sliderMax: this.state.setValues.max
        })

    }
    render(){
        return(
            <Fragment>
                
                <div className='nav-container--maxwidth'>Navigation
                    
                    <div className='nav-table row--static'>Stock Information</div>
                    
                    <div className='nav-table-row--responsive'>
                        
                        <Column min={this.state.sliderMin} max={this.state.sliderMax} />
                        

                    </div>

                </div>
            </Fragment>
        )
    }

}


export default Navigation;