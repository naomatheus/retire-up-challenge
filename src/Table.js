import React, {Fragment, Component} from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table-next'

// class Table extends Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             empty: true
//         }
//     }

//     render() {
//         return (
            
//             <BootstrapTable>

//             </BootstrapTable>

//         )
//     }
// }

const Table = (props) => {
    return (
        <div>
            Pass data as props to me
            <BootstrapTable>
                data={props.data}
                
                <TableHeaderColumn isKey datafield='year' />
                Text inside of table
                
            </BootstrapTable>
        </div>

    )
}

export default Table;
