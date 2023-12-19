"use client"
import { Box } from "@mui/material";
import Image from "next/image";
import * as React from 'react';



export default function Stock() {

    return (
        <Box sx={{ mt: 1 }}>stock
            <Image src="/static/img/next_login.jpg" width={180} height={35} alt="logo" ></Image>
            <Image src="https://www.codemobiles.com/biz/images/codemobiles_logo.svg?ref=10" width={180} height={35} alt="logo" ></Image>
        </Box>
    );
}