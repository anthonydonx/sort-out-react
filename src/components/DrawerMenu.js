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

const data = [
    {
        name: "Home",
        icon: <HomeOutlined />,
        path: "/", // Add path here
    },
    {
        name: "Machines",
        icon: <InboxOutlined />,
        path: "/Machines", // And here
    },
    { name: "Outbox", icon: <CheckBoxOutlineBlankOutlined /> },
    { name: "Sent mail", icon: <MailOutline /> },
    { name: "Draft", icon: <DraftsOutlined /> },
    { name: "Trash", icon: <ReceiptOutlined /> },
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