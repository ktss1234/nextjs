"use client"
import Box from "@mui/material/Box";
import React from "react";
import Header from "../_conponents/layout/Header";
import SideBar from "../_conponents/layout/Sidebar";
import DrawerHeader from "../_conponents/layout/DrawerHeader";
import { styled } from "@mui/material/styles";


const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));
type Props = {
    children: React.ReactNode;
};

export default function ExamplesLayout({ children }: Props) {
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <section>
            <Box sx={{ display: 'flex' }}>
                <Header open={open} handleDrawerOpen={handleDrawerOpen} />
                <SideBar open={open} handleDrawerClose={handleDrawerClose} />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    {/* <Main open={open}>
                        <DrawerHeader />
                        {children}</Main> */}
                    <DrawerHeader />{children}
                </Box>

            </Box></section>

    );
}