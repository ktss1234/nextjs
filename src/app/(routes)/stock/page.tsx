"use client"

import * as React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useSelector } from "react-redux";
import { getProducts, productSelector } from "@/store/slices/productSlice";
import { useAppDispatch } from "@/store/store";
import Image from "next/image"
import { productImageURL } from "@/utils/commonUtil";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'image', headerName: 'Image', width: 130,
        renderCell: ({ value }:
            GridRenderCellParams) =>

        (<Image
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
        />)



    },
    { field: 'name', headerName: 'Name', width: 130 },

    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'stock', headerName: 'Stock', width: 130 },


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