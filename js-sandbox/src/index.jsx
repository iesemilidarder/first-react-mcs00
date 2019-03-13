import React from 'react';
import ReactDOM from 'react-dom';
//import BootstrapTable from 'bootstrap-react-table';
import MyTableComponent from './component/MyTableComponent';

const title= "Lista de energumenos";
let myData = ["pepito","joselito","juanito","ito"];
let myComplexData = [
    {name:"Pepito1",surname:"Palotes1"},
    {name:"Pepito2",surname:"Palotes2"},
    {name:"Pepito3",surname:"Palotes3"},
    {name:"Pepito4",surname:"Palotes4"}
];
const columns = [
    {
        id: 'position',
        name: '#',
        first: true,
    },
    {
        id: 'name',
        name: 'Name'
    },
    {
        id: 'quantity',
        name: 'Quantity'
    }
];
const data = [
    {
        position: 1,
        name: 'Black shoes',
        quantity: 12
    }
];
function yuhu(){
    alert('hiThere');
}
ReactDOM.render(
    <div className="container">
        <h1>{title}</h1>
        <MyTableComponent
            show={true}
            title={"Toma peaso de tabla"}
            data={myComplexData}
            onClick={yuhu} />
        {/*<ul>
            <li>yuhu</li>
            {myData.map((v) =>
                <li>{v}</li>
            )}
        </ul>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                </tr>
            </thead>
            <tbody>
                {myComplexData.map((item) =>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.surname}</td>
                    </tr>
                )}
            </tbody>
        </table>*/}
        {/*<BootstrapTable columns={columns} data={data}/>*/}
    </div>
    ,document.getElementById('app')
);

