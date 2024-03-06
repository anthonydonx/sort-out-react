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
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import SkipNextIcon from "@mui/icons-material/SkipNext";

const materialCodes = [
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
function JobCard() {
    const navigate = useNavigate();
    const handleClick = () => navigate('/viewMASPODetails');
    // Sample data
    const [data, setData] = useState([
        {
            id: '337,000',
            lineNo: '665',
            category: 'Ipsum in',
            size: 'Content',
            qty: '950',
            material: 'Meterial',
            weight: '17',
            type: 'Type',
            sodNo: '3,571',
            actions: 'Edit'
        },
        //... Add more data as required
    ]);

    const columns = [
        { field: 'id', headerName: 'Item Code', flex: 1 },
        { field: 'lineNo', headerName: 'Line No', flex: 1 },
        { field: 'category', headerName: 'Category', flex: 2 },
        { field: 'size', headerName: 'Size', flex: 2 },
        { field: 'qty', headerName: 'Quantity', flex: 2 },
        { field: 'material', headerName: 'Material', flex: 2 },
        { field: 'weight', headerName: 'Weight', flex: 1 },
        { field: 'type', headerName: 'Type', flex: 2 },
        { field: 'sodNo', headerName: 'SOD No', flex:2 },
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
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>

            <div style={{marginBottom: '20px'}}>
                <Typography variant="h4" gutterBottom>
                    JOB CARD
                </Typography><br/>

                <TextField id="jobNo" label="Job #" variant="outlined" sx={{width: '15ch', mr: 2,}}/>
                <TextField id="serialNo" label="Serial #" variant="outlined" sx={{width: '15ch', mr: 2,}}/>
                <TextField id="date" label="Date" variant="outlined" sx={{width: '20ch', mr: 2,}}/>
                <TextField id="customerPONo" label="Customer PO #" variant="outlined" sx={{width: '25ch', mr: 2,}}/>
                <TextField id="deliveryDate" label="Delivery Date" variant="outlined" sx={{width: '20ch', mr: 2,}}/>
                <TextField id="deliveryAddress" label="Delivery Address" variant="outlined"
                           sx={{width: '70ch', mr: 2,}}/>

                <div style={{padding:'20px', marginTop:'20px'}}>
                    <div style={{marginBottom: '30px'}}>
                        <Typography variant="h6" gutterBottom>
                            Material Details
                        </Typography><br/>
                        <TextField id="itemCode" label="Item Code" variant="outlined" sx={{width: '15ch', mr: 2,}}/>
                        <TextField id="lineNo" label="Line #" variant="outlined"
                                   sx={{width: '15ch', mr: 2,}}/>
                        <TextField id="category" label="Category" variant="outlined" sx={{width: '20ch', mr: 2,}}/>
                        <TextField id="size" label="Size" variant="outlined"
                                   sx={{width: '15ch', mr: 2,}}/>
                        <TextField id="qty" label="Quantity" variant="outlined" sx={{width: '15ch', mr: 2,}}/>
                        <TextField
                            id="materialCode"
                            select
                            label="Material Code"
                            sx={{
                                width: '30ch', mr: 2,
                            }}
                        >
                            {materialCodes.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField id="jobQty" label="Job Quantity" variant="outlined" sx={{width: '15ch', mr: 2,}}/>
                        <TextField id="type" label="Type" variant="outlined" sx={{width: '20ch', mr: 2,}}/>
                        <TextField id="weight" label="Weight" variant="outlined" sx={{width: '15ch', mr: 2,}}/>
                        <Button variant="contained" startIcon={<ArrowDownwardIcon/>}
                                sx={{
                                    p: 2, paddingLeft: 4, paddingRight: 4, mr: 2, fontWeight: 'bold',
                                }}
                        >Add</Button>
                    </div>
                    <div style={{height: 350, width: '95%'}}>
                        <DataGrid rows={data} columns={columns} pageSize={10}/>
                    </div>
                </div>

            </div>

        </>
    );
}

export default JobCard;