import { DataGrid } from '@mui/x-data-grid';
import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import {Divider} from "@material-ui/core";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';

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
const customers = [
    {
        value: 'LKR',
        label: 'LKR',
    },
    {
        value: 'USD',
        label: 'USD',
    },
    {
        value: 'SGD',
        label: 'SGD',
    },
];
const sizes = [
    {
        value: '110',
        label: '110',
    },
    {
        value: '367',
        label: '367',
    },
];

// const handleClick = (event, cellValues) => {
//     console.log(cellValues.row);
// };
function CreatePO() {
    const navigate = useNavigate();
    const handleClick = () => navigate('/viewMASPODetails');
    // Sample data
    const [data, setData] = useState([
        {
            id: 22451,
            salesOrderNo: '641',
            style: '202402',
            sizeCategory: '800',
            itemNo: '14505',
            description: 'Test description',
            size: '8422',
            qty: '20000',
            uom: '7802',
            price: '15400',
            qtyPerPack: '10',
            targetDate: '2024-01-01',
            actions: 'Edit'
        },
        //... Add more data as required
    ]);

    const columns = [
        { field: 'id', headerName: 'Line #', flex: 1 },
        { field: 'salesOrderNo', headerName: 'Sales Order #', flex: 1 },
        { field: 'style', headerName: 'Style', flex: 1 },
        { field: 'sizeCategory', headerName: 'Size Category', flex: 2 },
        { field: 'itemNo', headerName: 'Item #', flex: 1.5 },
        { field: 'description', headerName: 'Description', flex: 5 },
        { field: 'size', headerName: 'Size', flex: 1 },
        { field: 'qty', headerName: 'Qty', flex: 1 },
        { field: 'uom', headerName: 'UOM', flex: 2 },
        { field: 'price', headerName: 'Price', flex: 1 },
        { field: 'qtyPerPack', headerName: 'Qty per Pack', flex: 2 },
        { field: 'targetDate', headerName: 'Target Date', flex: 2 },
        {
            field: 'actions', headerName: 'Actions', flex: 2,
            renderCell: (cellValues) => {
                return (
                    <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<EditIcon/>}
                    >
                        Edit
                    </Button>
                );
            }
        }
    ];
    const [data1, setData1] = useState([
        {
            id: 22451,
            salesOrderNo: '641',
            itemCode: '202402',
            jobNo: '800',
            size: '14505',
            qtyPerPack: '10',
            packNo: '5544',
            itemCategory: 'Test description',
            actions: 'Edit'
        },
        //... Add more data as required
    ]);

    const columns1 = [
        { field: 'id', headerName: 'Line #', flex: 1 },
        { field: 'sod', headerName: 'SOD #', flex: 1 },
        { field: 'itemCode', headerName: 'Item Code', flex: 1 },
        { field: 'jobNo', headerName: 'Job #', flex: 1 },
        { field: 'size', headerName: 'Size', flex: 2 },
        { field: 'qtyPerPack', headerName: 'Qty per Pack', flex: 1 },
        { field: 'packNo', headerName: 'Pack #', flex: 2 },
        { field: 'itemCategory', headerName: 'Item Category', flex: 5 },
        {
            field: 'actions', headerName: 'Actions', flex: 2,
            renderCell: (cellValues) => {
                return (
                    <Button
                        variant="outlined"
                        color="primary"
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

            <div>
                <Typography variant="h4" gutterBottom>
                    CREATE PURCHASE ORDERS
                </Typography><br/>
            </div>
            <div style={{marginBottom: '20px'}}>
                <Accordion style={{width: '95%'}} className='accordion' defaultExpanded expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        PO Details
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextField id="date" label="Date" variant="outlined" sx={{width: '20ch', mr: 2,}}/>
                        <TextField
                            id="outlined-select-supplier"
                            select
                            label="Customer"
                            sx={{
                                width: '30ch', mr: 2,
                            }}
                        >
                            {suppliers.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField id="address" label="Address" variant="outlined" sx={{width: '60ch', mr: 2,}}/>
                        <TextField
                            id="outlined-select-supplier"
                            select
                            label="Currency"
                            sx={{
                                width: '15ch', mr: 2,
                            }}
                        >
                            {customers.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField id="customer-po-no" label="Customer PO No" variant="outlined" sx={{width: '15ch',mr: 2,}}/>
                        <Button variant="contained" endIcon={<SkipNextIcon/>}
                                sx={{
                                    p: 2, paddingLeft: 4, paddingRight: 4, mr:2, fontWeight: 'bold',
                                }}
                        >Next</Button>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{width: '95%'}} className='accordion' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        Item Details
                    </AccordionSummary>
                    <AccordionDetails>
                        <div style={{marginBottom: '10px'}}>
                            <TextField id="lineNo" label="Line #" variant="outlined" sx={{width: '10ch', mr: 2,}}/>
                            <TextField id="salesOrderNo" label="Sales Order #" variant="outlined"
                                       sx={{width: '20ch', mr: 2,}}/>
                            <TextField id="style" label="Style" variant="outlined" sx={{width: '10ch', mr: 2,}}/>
                            <TextField id="sizeCategory" label="Size Category" variant="outlined"
                                       sx={{width: '20ch', mr: 2,}}/>
                            <TextField id="itemNo" label="Item #" variant="outlined" sx={{width: '10ch', mr: 2,}}/>
                            <TextField id="description" label="Description" variant="outlined"
                                       sx={{width: '80ch', mr: 2,}}/>
                        </div>
                        <div style={{marginBottom: '10px'}}>

                            <TextField
                                id="outlined-select-supplier"
                                select
                                label="Size"
                                sx={{
                                    width: '15ch', mr: 2,
                                }}
                            >
                                {sizes.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField id="qty" label="Qty" variant="outlined" sx={{width: '10ch', mr: 2,}}/>
                            <TextField id="uom" label="UOM" variant="outlined" sx={{width: '15ch', mr: 2,}}/>
                            <TextField id="price" label="Price" variant="outlined" sx={{width: '15ch', mr: 2,}}/>

                            <TextField id="qtyPerPack" label="Qty per Pack" variant="outlined"
                                       sx={{width: '15ch', mr: 2,}}/>
                            <TextField id="targetDate" label="Target Date" variant="outlined"
                                       sx={{width: '25ch', mr: 2,}}/>
                            <Button variant="contained" startIcon={<ArrowDownwardIcon/>}
                                    sx={{
                                        p: 2, paddingLeft: 4, paddingRight: 4, mr: 2, fontWeight: 'bold',
                                    }}
                            >Add</Button>
                            <Button variant="outlined" startIcon={<ClearAllIcon/>}
                                    sx={{
                                        p: 2, paddingLeft: 4, paddingRight: 4, fontWeight: 'bold',
                                    }}
                            >Clear</Button>
                        </div>
                        <div style={{height: 350, width: '100%'}}>
                            <DataGrid rows={data} columns={columns} pageSize={10}/>
                        </div>
                        <div className="nextButtonDiv">
                            <Button variant="contained" endIcon={<SkipNextIcon/>} className="nextButton"
                                    sx={{
                                        p: 1, paddingLeft: 4, paddingRight: 4, mt:2, fontWeight: 'bold', marginLeft: 'auto',
                                    }}
                            >Next</Button>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{width: '95%'}} className='accordion' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        Packing Details
                    </AccordionSummary>
                    <AccordionDetails>
                        <div style={{marginBottom: '10px'}}>
                            <TextField id="lineNo" label="Line #" variant="outlined" sx={{width: '10ch', mr: 2,}}/>
                            <TextField id="sodNo" label="SOD #" variant="outlined"
                                       sx={{width: '10ch', mr: 2,}}/>
                            <TextField id="itemCode" label="Item Code" variant="outlined" sx={{width: '10ch', mr: 2,}}/>
                            <TextField id="jobNo" label="Job #" variant="outlined" sx={{width: '10ch', mr: 2,}}/>
                            <TextField id="size" label="Size" variant="outlined" sx={{width: '20ch', mr: 2,}}/>
                            <TextField id="qtyPerPack" label="Qty per Pack" variant="outlined"
                                       sx={{width: '15ch', mr: 2,}}/>
                            <TextField id="packNo" label="Pack #" variant="outlined" sx={{width: '10ch', mr: 2,}}/>
                            <TextField id="itemCategory" label="Item Category" variant="outlined"
                                       sx={{width: '40ch', mr: 2,}}/>
                            <Button variant="contained" startIcon={<ArrowDownwardIcon/>}
                                    sx={{
                                        p: 2, paddingLeft: 4, paddingRight: 4, mr: 2, fontWeight: 'bold',
                                    }}
                            >Add</Button>
                            <Button variant="outlined" startIcon={<ClearAllIcon/>}
                                    sx={{
                                        p: 2, paddingLeft: 4, paddingRight: 4, fontWeight: 'bold',
                                    }}
                            >Clear</Button>
                        </div>
                        <div style={{height: 350, width: '100%'}}>
                            <DataGrid rows={data1} columns={columns1} pageSize={10}/>
                        </div>
                        <div className="nextButtonDiv">
                            <Button variant="contained" color="success" startIcon={<SaveIcon/>} className="nextButton"
                                    sx={{
                                        p: 1,
                                        paddingLeft: 4,
                                        paddingRight: 4,
                                        mt: 2,
                                        fontWeight: 'bold',
                                        marginLeft: 'auto',
                                    }}
                            >Save</Button>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>

        </>
    );
}

export default CreatePO;