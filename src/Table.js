import React, {Fragment, Component} from 'react'
import Table from 'react-bootstrap/Table'

// class Table extends Component {
//     constructor(props){
//         super(props)
//     }

//     render() {
//         return (
            
//             <div>Table here
                
//             </div>

//         )
//     }
// }


const BootstrapTable = (props) => {
    return (
        
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>#</th>
                        <th>#</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </Table>

        </div>

    )
}

export default BootstrapTable;
