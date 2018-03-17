import React from 'react';

// const tableRows = props.data.map( () => {
//     console.log(item)
// } );


{/* <td> {this.state.name}</td>
<td> {this.state.course} </td>
<td> {this.state.grade} </td> */}


export default (props) => {
    const tableRows = props.data.map( ( item, index ) => {
        console.log(item);
        return (
            <tr key={index} >  
                <td> {item.name} </td>
                <td> {item.course} </td>
                <td> {item.grade} </td>
            </tr>
        )
    } );

    return (
        <table className = 'table'>
            <thead className="thead-inverse">
                <tr>
                    <th> Name </th>
                    <th> course </th>
                    <th> grade </th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
}
