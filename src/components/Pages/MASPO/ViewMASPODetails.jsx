import { DataGrid } from '@mui/x-data-grid';
import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import ImportExportIcon from '@mui/icons-material/ImportExport';

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
const handleClick = (event, cellValues) => {
    console.log(cellValues.row);
};
function ViewMASPODetails() {
    // Sample data
    const [data, setData] = useState([
        {
            id: 22451,
            materialCode: 'MC001',
            description: 'Item 1',
            salesOrder: 'SO001',
            deliveryDate: '2025-12-01',
            balanceQty: 100,
            uom: 'KG',
            netPrice: 50.00
        },
        //... Add more data as required
    ]);

    const columns = [
        { field: 'id', headerName: 'PO No', flex: 1 },
        { field: 'materialCode', headerName: 'Material Code', flex: 1 },
        { field: 'description', headerName: 'Description', flex: 2 },
        { field: 'salesOrder', headerName: 'Sales Order', flex: 2 },
        { field: 'deliveryDate', headerName: 'Delivery Date', flex: 2 },
        { field: 'balanceQty', headerName: 'Balance Qty', flex: 1.5 },
        { field: 'uom', headerName: 'UOM', flex: 1 },
        { field: 'netPrice', headerName: 'Net Price', flex: 1.3 },
        { field: 'actions', headerName: 'Actions',
            renderCell: (cellValues) => {
                return (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={(event) => {
                            handleClick(event, cellValues);
                        }}
                        startIcon={<SearchIcon />}
                    >
                        View
                    </Button>
                );
            }
        },
    ];

    return (
        <>
                <div style={{marginBottom: '20px'}}>
                    <Typography variant="h4" gutterBottom>
                        MAS PURCHASE ORDERS
                    </Typography><br/>

                    <TextField disabled id="poNo" label="PO No" defaultValue="PO12345" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="createdDate" label="Created Date" defaultValue="2024-02-01" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="poDate" label="PO Date" defaultValue="2024-02-05" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="lastRevisionDate" label="Last Revision Date" defaultValue="2024-02-10" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="currency" label="Currency" defaultValue="USD" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="contactPerson" label="Contact Person" defaultValue="John Smith" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="contact" label="Contact" defaultValue="(123) 456-7890" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="email" label="Email" defaultValue="john.smith@example.com" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="salesPerson" label="Sales Person" defaultValue="Sales Person 1" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="supplierName" label="Supplier Name" defaultValue="Supplier 1" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="supplierAddress1" label="Supplier Address 1" defaultValue="123 Street, City, State" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="supplierAddress2" label="Supplier Address 2" defaultValue="456 Avenue, City, State" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="supplierContact" label="Supplier Contact" defaultValue="supplier1@example.com" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="supplierFax" label="Supplier Fax" defaultValue="(123) 456-7891" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="billTo1" label="Bill To Name 1" defaultValue="Bill To Name 1" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="billTo2" label="Bill To Name 2" defaultValue="Bill To Name 2" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="billTo3" label="Bill To Name 3" defaultValue="Bill To Name 3" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="billToAddr1" label="Bill To Address 1" defaultValue="123 Road, City, State" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="billToAddr2" label="Bill To Address 2" defaultValue="456 Street, City, State" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="billToAddrCode" label="Bill To Address Code" defaultValue="12345" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="deliveryAddrCode" label="Delivery Address Code" defaultValue="67890" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="deliveryAddr" label="Delivery Address" defaultValue="789 Place, City, State" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="poVersion" label="PO Version" defaultValue="V1.0" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="isConfirmed" label="Is Confirmed?" defaultValue="Yes" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="supplier" label="Supplier" defaultValue="Supplier 1" sx={{mr: 2, mb: 3}} />
                    <TextField disabled id="jobNo" label="Job No" defaultValue="JOB12345" sx={{mr: 2, mb: 3}} />
                    <br/>
                    <TextField disabled id="status" label="Status" defaultValue="New" sx={{mr: 2, mb: 3}} />
                    <Button variant="contained" startIcon={<ImportExportIcon />}
                            sx={{
                                p: 2, paddingLeft: 4, paddingRight: 4, fontWeight: 'bold',
                            }}
                    >Import PO</Button>
                </div>
                <div style={{height: 300, width: '95%'}}>
                <DataGrid rows={data} columns={columns} pageSize={10}/>
                </div>
        </>
    );
}

export default ViewMASPODetails;