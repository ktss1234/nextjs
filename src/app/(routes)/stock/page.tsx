"use client"

import * as React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useSelector } from "react-redux";
import { getProducts, productSelector } from "@/store/slices/productSlice";
import { useAppDispatch } from "@/store/store";
import Image from "next/image"
import { productImageURL } from "@/utils/commonUtil";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { NumericFormat } from "react-number-format";
import { Typography } from "@mui/material";
import dayjs from "dayjs";


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'image', headerName: 'Image', width: 130,
        renderCell: ({ value }:
            GridRenderCellParams) =>
        (
            <Zoom>
                <Image
                    key={value}
                    height={500}
                    width={500}
                    alt="product image"
                    src={productImageURL(value)}
                    style={{ 
                        width: 70,
                        height: 70,
                        borderRadius: "5%",
                        objectFit: "cover",
                    }}
                />
            </Zoom>
        )
    },
    {
        field: 'name', headerName: 'Name', width: 350
    },
    {
        field: 'stock', headerName: 'Stock', width: 150,
        renderCell: ({ value }: GridRenderCellParams) => (
            <Typography variant="body1">
                <NumericFormat
                    value={value}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={0}
                    fixedDecimalScale={true} />
            </Typography>

        )
    },
    {
        field: 'price', headerName: 'Price', width: 130,
        renderCell: ({ value }: GridRenderCellParams) => (
            <Typography variant="body1">
                <NumericFormat
                    value={value}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    fixedDecimalScale={true} />
            </Typography>

        )
    },
    {
        field: "createdAt",
        headerName: "Timestamp",
        width: 230,
        renderCell: ({ value }) => (
            <Typography variant="body1">
                {dayjs(value).format("DD/MM/YYYY HH:mm")}
            </Typography>
        ),
    },
];

export default function DataTable() {
    const productReducer = useSelector(productSelector)
    const dispatch = useAppDispatch()
    React.useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={productReducer.product}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            // checkboxSelection
            />
        </div>
    );
}