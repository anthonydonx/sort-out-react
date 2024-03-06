import { DataGrid } from '@mui/x-data-grid';
import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit";

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
function Customer() {
    const navigate = useNavigate();
    const handleClick = () => navigate('/viewMASPODetails');
    // Sample data
    const [data, setData] = useState([
        {
            id: 'John Smith',
            customerAddress: '102, Pubudu Uyana Henegama, 11715',
            contactPersonName: 'Saman Silva',
            notificationEmails: 'abc@gmail.com, info@xyz.com',
            actions: 'Edit'
        },
        //... Add more data as required
    ]);

    const columns = [
        { field: 'id', headerName: 'Customer Name', flex: 1 },
        { field: 'customerAddress', headerName: 'Customer Address', flex: 3 },
        { field: 'contactPersonName', headerName: 'Contact Person Name', flex: 2 },
        { field: 'notificationEmails', headerName: 'Notification Emails', flex: 3 },
        {
            field: 'actions', headerName: 'Actions', flex: 1,
            renderCell: (cellValues) => {
                return (
                    <Button
                        variant="contained"
                        color="info"
                        startIcon={<EditIcon/>}
                    >
                        Edit
                    </Button>
                );
            }
        }
    ];

    return (
        <>

            <div style={{marginBottom: '20px'}}>
                <Typography variant="h4" gutterBottom>
                    CUSTOMER
                </Typography><br/>

                <TextField id="customerName" label="Customer Name" variant="outlined" sx={{width: '35ch', mr: 2,}}/>
                <TextField id="customerAddress" label="Customer Address" variant="outlined" sx={{width: '60ch', mr: 2,}}/>
                <TextField id="contactPersonName" label="Contact Person Name" variant="outlined" sx={{width: '35ch', mr: 2,}}/>
                <TextField id="notificationEmails" label="Notification Emails" variant="outlined" sx={{width: '40ch',mr: 2,}}/>
                <Button variant="contained" startIcon={<SaveIcon/>}
                        sx={{
                            p: 2, paddingLeft: 4, paddingRight: 4, mr: 2, fontWeight: 'bold',
                        }}
                >Save</Button>
                <Button variant="outlined" startIcon={<DeleteIcon/>} className="delBtn"
                    sx={{
                            p: 2, paddingLeft: 4, paddingRight: 4, fontWeight: 'bold',
                        }}
                >Delete</Button>
            </div>
            <div style={{height: 500, width: '95%'}}>
                <DataGrid rows={data} columns={columns} pageSize={10}/>
            </div>
        </>
    );
}

export default Customer;