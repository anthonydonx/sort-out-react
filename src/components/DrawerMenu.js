import {
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import {
    HomeOutlined, RemoveRedEye,
} from "@material-ui/icons";
import { useState } from "react";
import { Link } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';

const data = [
    {
        name: "Home",
        icon: <HomeOutlined />,
        path: "/home", // Add path here
    },
    {
        name: "Create PO",
        icon: <AddCircleOutlineIcon />,
        path: "/CreatePO", // And here
    },
    {
        name: "View PO",
        icon: <SearchIcon />,
        path: "/ViewMASPO", // And here
    },
    {
        name: "View General PO",
        icon: <SearchIcon />,
        path: "/ViewGeneralPO", // And here
    },
    {
        name: "Customer",
        icon: <PersonIcon />,
        path: "/Customer", // And here
    },
    {
        name: "Job Card",
        icon: <WorkIcon />,
        path: "/JobCard", // And here
    },
    {
        name: "View Job",
        icon: <RemoveRedEye />,
        path: "/ViewJob", // And here
    },
    { name: "Logout", icon: <LogoutIcon />, path: "/", },
];

function DrawerMenu() {
    const [open, setOpen] = useState(false);

    const getList = () => (
        <div className="sidePanel" style={{ width: 220 }} onClick={() => setOpen(false)}>
            {data.map((item, index) => (
                <Link to={item.path} key={index} style={{ textDecoration: 'none', color: 'inherit' }}> {/* Wrap ListItem with Link */}
                    <ListItem button>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItem>
                </Link>
            ))}
        </div>

    );

    return (
        <div>

            <Drawer
                variant="permanent"
                open={open}
                anchor={"left"}
                onClose={() => setOpen(false)}

            >
                {getList()}{/*
                <Divider />
                {getList()}*/}
            </Drawer>
        </div>
    );
}

export default DrawerMenu;