import React, {Fragment, Component} from 'react'
import Table from 'react-bootstrap/Table'

const BootstrapTable = (props) => {

    // props is an object with property called props, props property contains an array of objects with year/return data    

    let tableEles = props.props.map((item) => {
        return (
            
                
                <div>
                    <td>
                    <tr key={item.year.toString()}>
                        {item.year}
                    </tr>
                    </td>
                    <td>
                        <tr key={Math.random()}>
                            {item.totalReturn}
                        </tr>
                    </td>
                </div>
            
        )
    })

    return (

        <div>
            <Table striped bordered hover>
                <thead>
                    
                        <th>Year</th>
                        <th>Total Return</th>
                    
                </thead>
                <tbody>
                    {tableEles}
                </tbody>
            </Table>

        </div>

    )
}

export default BootstrapTable;
