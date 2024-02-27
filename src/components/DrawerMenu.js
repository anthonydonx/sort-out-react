import {
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    Divider, makeStyles,
} from "@material-ui/core";
import {
    CheckBoxOutlineBlankOutlined,
    DraftsOutlined,
    HomeOutlined,
    InboxOutlined,
    MailOutline,
    ReceiptOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { Link } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

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
    { name: "Outbox", icon: <CheckBoxOutlineBlankOutlined /> },
    { name: "Sent mail", icon: <MailOutline /> },
    { name: "Draft", icon: <DraftsOutlined /> },
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