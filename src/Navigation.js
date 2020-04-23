import React, {Component,Fragment} from 'react';
import Column from './Column.js'
import {Range} from 'rc-slider'
import Row from './Row.js'
import './navigation.css'
import Card from './Card.js'

class Navigation extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            isFetching: false,
            data: this.data
        }
    
    }
    render(){
        return(
            <Fragment>
                
                <div className='nav-container--maxwidth'>Navigation Top layer
                    < Row />
                    <div className='nav-table row--static'>Stock Information in Navigation component</div>
                    < Range />
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