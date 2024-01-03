import { DataGrid } from '@mui/x-data-grid';
import React, {useEffect, useState} from "react";

function Machines() {
    const url = "http://localhost:8095/v1/api/machine";
    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d.content))
    }


    useEffect(() => {
        fetchInfo();
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        { field: 'name', headerName: 'Machine name', width: 130 },
        { field: 'category', headerName: 'Category', width: 120 },
        { field: 'serialNumber', headerName: 'Serial Number', width: 130 },
        { field: 'modelNumber', headerName: 'Model Number', width: 130 },
        { field: 'location', headerName: 'Location', width: 140 },
        { field: 'manufactureYear', headerName: 'Manufacture Year', width: 130 },
        { field: 'department', headerName: 'Department', width: 120 },
        { field: 'serviceFrequency', headerName: 'Service Frequency', width: 150 },
        { field: 'status', headerName: 'Status', width: 120 },
    ];

    return (
        <>

            {/*<h2>Machines
                Aaaaaaaadsdksmlfkndjskgndfslkgjnkldsfjglkfdjglfdjglkfjdgkljfdlkgj;fsdjg;dlskgj;dsklfjg;klsdfjglkfdsjg</h2>
            <p>Hello Machines</p>*/}

            <div style={{height: 400, width: '100%'}}>
                <DataGrid rows={data} columns={columns} pageSize={5}/>
            </div>

        </>
    );
}

export default Machines;