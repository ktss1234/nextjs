"use client"

import * as React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams, GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import { useSelector } from "react-redux";
import { getProducts, productSelector } from "@/store/slices/productSlice";
import { useAppDispatch } from "@/store/store";
import Image from "next/image"
import { productImageURL } from "@/utils/commonUtil";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { NumericFormat } from "react-number-format";
import { Box, Fab, Grid, IconButton, Link, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import { Add, AddShoppingCart, AssignmentReturn, Delete, Edit, NewReleases, Star } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { userSelector } from "@/store/slices/userSlice";
import { ProductData } from "@/models/product.model";
import StockCard from "@/app/_conponents/common/StockCard";



export default function StockPage() {
    const productReducer = useSelector(productSelector)
    const userRedeucer = useSelector(userSelector)
    const dispatch = useAppDispatch()
    const router = useRouter();
    const [openDialog, setOpenDialog] = React.useState(false);
    const [selectedProduct, setSelectedProduct] = React.useState<ProductData | null>(
        null
    );
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
        {
            headerName: "ACTION",
            field: ".",
            width: 120,
            renderCell: ({ row }: GridRenderCellParams<any>) => (
                <Stack direction="row">
                    <IconButton
                        aria-label="edit"
                        size="large"
                        onClick={() => router.push(`/stock/edit?id=${row.id}`)}
                    >
                        <Edit fontSize="inherit" />
                    </IconButton>
                    <IconButton
                        aria-label="delete"
                        size="large"
                        onClick={() => {
                            setSelectedProduct(row);
                            setOpenDialog(true);
                        }}
                    >
                        <Delete fontSize="inherit" />
                    </IconButton>
                </Stack>
            ),
        },
    ];



    React.useEffect(() => {
        if (!userRedeucer.isAuthenticating) { dispatch(getProducts()) }

    }, [dispatch, userRedeucer.isAuthenticating])
    const CustomToolbar: React.FunctionComponent<{
        setFilterButtonEl: React.Dispatch<
            React.SetStateAction<HTMLButtonElement | null>
        >;
    }> = ({ setFilterButtonEl }) => (
        <GridToolbarContainer>
            <GridToolbarFilterButton ref={setFilterButtonEl} />
            <Link href="/stock/add">
                <Fab
                    color="primary"
                    aria-label="add"
                    sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                    }}
                >
                    <Add />
                </Fab>
            </Link>
        </GridToolbarContainer>
    );
    return (
        <Box style={{ height: 400, width: '100%' }}>
            {/* Cards */}
            <Grid container style={{ marginBottom: 16 }} spacing={7}>
                <Grid item lg={3} md={6} sm={12}>
                    <StockCard
                        icon={AddShoppingCart}
                        title="TOTAL"
                        subtitle="112 THB"
                        color="#00a65a"
                    />
                </Grid>

                <Grid item lg={3} md={6} sm={12}>
                    <StockCard
                        icon={NewReleases}
                        title="EMPTY"
                        subtitle="9 PCS."
                        color="#f39c12"
                    />
                </Grid>

                <Grid item lg={3} md={6} sm={12}>
                    <StockCard
                        icon={AssignmentReturn}
                        title="RETURN"
                        subtitle="1 PCS."
                        color="#dd4b39"
                    />
                </Grid>

                <Grid item lg={3} md={6} sm={12}>
                    <StockCard
                        icon={Star}
                        title="LOSS"
                        subtitle="5 PCS."
                        color="#00c0ef"
                    />
                </Grid>
            </Grid>
            <DataGrid
                sx={{ backgroundColor: "white", height: "70vh" }}
                rows={productReducer.product}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                slots={{ toolbar: CustomToolbar }}
            // checkboxSelection
            />
        </Box>
    );

}