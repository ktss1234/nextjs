import { Card, Grid, Typography } from "@mui/material"
import React from 'react'

type Props = {
    icon?: any;
    title?: string;
    subtitle?: string;
    color?: string;
}

export default function StockCard(props: Props) {
    return (
        <Card elevation={7}>
            <Grid container style={{ minHeight: 70 }}>
                <Grid item sx={{ flexGrow: 1, height: 100, padding: 1 }}>
                    <Typography variant="h4" color="textPrimary">
                        {props.title}
                    </Typography>
                    <Typography variant="h5" color="textSecondary">
                        {props.subtitle}
                    </Typography>
                </Grid>

                <Grid
                    item
                    style={{
                        backgroundColor: props.color,
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: 70,
                    }}
                >
                    <props.icon fontSize="large" />
                </Grid>
            </Grid>
        </Card>
    )
}