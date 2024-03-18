import { DataGrid } from '@mui/x-data-grid';
import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {CalendarMonth, ModeEdit} from "@mui/icons-material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const searchby = [
    {
        value: 'Job Card ID',
        label: 'Job Card ID',
    },
    {
        value: 'Item Code',
        label: 'Item Code',
    },
    {
        value: 'SOD',
        label: 'SOD',
    },
];
// const handleClick = (event, cellValues) => {
//     console.log(cellValues.row);
// };
function ViewGeneralPO() {
    const navigate = useNavigate();

    const jcid = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(1)',}}
            className = 'infoBullets'
        >
            40000565656/01
        </Box>
    );
    const itemCode = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(1)',}}
            className = 'infoBullets'
        >
           1505544
        </Box>
    );
    const material = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(1)',}}
            className = 'infoBullets'
        >
            Material 01/Poly bag
        </Box>
    );
    const weight = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(1)',}}
            className = 'infoBullets fiveRightMargin'
        >
            4550g
        </Box>
    );
    const qty = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(1)',}}
            className = 'infoBullets noLeftMargin'
        >
            45
        </Box>
    );
    const sod = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(1)',}}
            className = 'infoBullets'
        >
            32223334
        </Box>
    );
    const dateIcon = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(1)',}}
            className = 'dateIcon'
        >
            <CalendarMonth />
        </Box>
    );
    const date = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(1)',}}
            className = 'infoBullets'
        >
            03 Mar 2024
        </Box>
    );
    const statusCreated = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(1)',}}
            className = 'infoBullets created'
        >
            Created
        </Box>
    );
    const statusApproved = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(1)',}}
            className = 'infoBullets approved'
        >
            Approved
        </Box>
    );
    const statusProcessing = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(1)',}}
            className = 'infoBullets processing'
        >
            Processing
        </Box>
    );
    const statusCompleted = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(1)',}}
            className = 'infoBullets completed'
        >
            Completed
        </Box>
    );
    const actions = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(1)',}}
            className = 'tinyButton'
        >
            <Button
                variant="outlined"
                color="primary"
                startIcon={<ModeEdit/>}
            >
            </Button>
            <Button
                variant="outlined"
                color="primary"
                startIcon={<MoreHorizIcon/>}
            >
            </Button>
        </Box>
    );
    const card = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    JC ID: {jcid} Item Code: {itemCode} Material: {material} Weight / Qty {weight} {qty} SOD: {sod} {dateIcon} {date} Status {statusCreated} {actions}
                </Typography>
            </CardContent>
        </React.Fragment>
    );
    const cardApproved = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    JC ID: {jcid} Item Code: {itemCode} Material: {material} Weight / Qty {weight} {qty} SOD: {sod} {dateIcon} {date} Status {statusApproved} {actions}
                </Typography>
            </CardContent>
        </React.Fragment>
    );
    const cardProcessing = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    JC ID: {jcid} Item Code: {itemCode} Material: {material} Weight / Qty {weight} {qty} SOD: {sod} {dateIcon} {date} Status {statusProcessing} {actions}
                </Typography>
            </CardContent>
        </React.Fragment>
    );
    const cardCompleted = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    JC ID: {jcid} Item Code: {itemCode} Material: {material} Weight / Qty {weight} {qty} SOD: {sod} {dateIcon} {date} Status {statusCompleted} {actions}
                </Typography>
            </CardContent>
        </React.Fragment>
    );

    return (
        <>

            <div style={{marginBottom: '20px'}}>
                <Typography variant="h4" gutterBottom>
                    View PO
                </Typography><br/>
                <div style={{width: '95%', textAlign: 'right'}}>
                    <TextField
                        id="outlined-select-supplier"
                        select
                        label="Search by"
                        defaultValue=""
                        sx={{
                            width: '30ch',  mr: 2,
                        }}
                    >
                        {searchby.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField id="searchText" label="Search text" variant="outlined" sx={{width: '30ch'}}/>
                </div>
            </div>
            <div style={{width: '95%', marginBottom: '50px'}} className = 'infoDiv'>
                <Typography variant="h5" gutterBottom>
                    PO / Job Card: 40000056556
                </Typography><br/>
                <Box sx={{ width: '100%' }}>
                    <Card variant="outlined">{card}</Card>
                    <Card variant="outlined">{cardApproved}</Card>
                    <Card variant="outlined">{cardProcessing}</Card>
                    <Card variant="outlined">{cardCompleted}</Card>
                </Box>
            </div>
            <div style={{width: '95%'}} className = 'infoDiv'>
            <Typography variant="h5" gutterBottom>
                PO / Job Card: 40000056544
            </Typography><br/>
            <Box sx={{ width: '100%' }}>
                <Card variant="outlined">{card}</Card>
                <Card variant="outlined">{cardApproved}</Card>
                <Card variant="outlined">{cardProcessing}</Card>
                <Card variant="outlined">{cardCompleted}</Card>
            </Box>
        </div>


        </>
    );
}

export default ViewGeneralPO;