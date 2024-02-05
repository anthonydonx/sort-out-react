import { DataGrid } from '@mui/x-data-grid';
import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const suppliers = [
    {
        value: 'ABC',
        label: 'ABC',
    },
    {
        value: 'EFD',
        label: 'EFD',
    },
    {
        value: 'XYZ',
        label: 'XYZ',
    },
];
// const handleClick = (event, cellValues) => {
//     console.log(cellValues.row);
// };
function ViewMASPO() {
    const navigate = useNavigate();
    const handleClick = () => navigate('/viewMASPODetails');
    // Sample data
    const [data, setData] = useState([
        {
            id: 22451,
            version: '1.0',
            poDate: '2024-01-01',
            lastModified: '2024-01-02',
            currency: 'USD',
            contactPerson: 'John Doe',
            contact: '1234567890',
            email: 'johndoe@example.com',
            supplier: 'MAS',
            address: '123 St, City, State',
            supplierContact: '1234567890',
            billTo: 'MAS',
            supplierAddress: '456 St, City, State',
            status: 'New',
            actions: 'View'
        },
        //... Add more data as required
    ]);

    const columns = [
        { field: 'id', headerName: 'PO No', flex: 1 },
        { field: 'version', headerName: 'Version', flex: 1 },
        { field: 'poDate', headerName: 'PO Date', flex: 2 },
        { field: 'lastModified', headerName: 'Last Modified', flex: 2 },
        { field: 'currency', headerName: 'Currency', flex: 1.5 },
        { field: 'contactPerson', headerName: 'Contact Person', flex: 2 },
        { field: 'contact', headerName: 'Contact', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 2 },
        { field: 'supplier', headerName: 'Supplier', flex: 2 },
        { field: 'address', headerName: 'Address', flex: 3 },
        { field: 'supplierContact', headerName: 'Supplier Contact', flex: 2 },
        { field: 'billTo', headerName: 'Bill To', flex: 2 },
        { field: 'supplierAddress', headerName: 'Supplier Address', flex: 3 },
        { field: 'status', headerName: 'Status', flex: 1.5 },
        {
            field: 'actions', headerName: 'Actions', flex: 2,
            renderCell: (cellValues) => {
                return (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={(event) => {
                            handleClick(event, cellValues);
                        }}
                        startIcon={<SearchIcon/>}
                    >
                        View
                    </Button>
                );
            }
        }
    ];

    return (
        <>

            <div style={{marginBottom: '20px'}}>
                <Typography variant="h4" gutterBottom>
                    VIEW PURCHASE ORDERS
                </Typography><br/>
                <TextField
                    id="outlined-select-supplier"
                    select
                    label="Supplier"
                    defaultValue="ABC"
                    helperText="Please select your supplier"
                    sx={{
                        width: '50ch', mr: 2,
                    }}
                >
                    {suppliers.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField id="from-date" label="From" variant="outlined" sx={{width: '25ch', mr: 2,}}/>
                <TextField id="to-date" label="To" variant="outlined" sx={{width: '25ch', mr: 2,}}/>
                <TextField id="search-po" label="Search PO" variant="outlined" sx={{mr: 2,}}/>
                <Button variant="contained" startIcon={<SearchIcon/>}
                        sx={{
                            p: 2, paddingLeft: 4, paddingRight: 4, fontWeight: 'bold',
                        }}
                >Search</Button>
            </div>
            <div style={{height: 500, width: '95%'}}>
                <DataGrid rows={data} columns={columns} pageSize={10}/>
            </div>
        </>
    );
}

export default ViewMASPO;