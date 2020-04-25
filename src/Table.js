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

    console.table(props.props[0]) 
    // props is an object with property called props, props property contains an array of objects with year/return data
    
    // access the array within props, and use object references to access each data element
    // props.props.forEach((item) => {
    //     console.table(item.year,item.totalReturn)
    // })

    let tableYears = props.props.map((item) => {
        return (
            <tr key={item.year.toString()}>
                {item.year}
            </tr>
        )
    })
    let tableReturn = props.props.map((item) => {
        let intYear = parseInt(item.year)
        console.log(typeof(intYear))
        return (
            <tr key={Math.random()}>{intYear}</tr>
        )
    })
    return (

        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        
                        <th>Year</th>
                        <th>Total Return</th>
                        
                    </tr>
                    
                </thead>
                <tbody>
                    {tableYears}
                    
                </tbody>
                <tbody>
                    {tableReturn}
                </tbody>
            </Table>

        </div>

    )
}

export default BootstrapTable;
