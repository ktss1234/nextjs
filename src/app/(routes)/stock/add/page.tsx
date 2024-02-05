"use client";
import { ProductData } from "@/models/product.model";
import { Card, CardContent, Typography, TextField, Box, CardActions, Button } from "@mui/material";
import router from "next/router";
import React from 'react'
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";

type Props = {}

export default function StockCreate
  ({ }: Props) {


  const showPreviewImage = () => {

    return (
      <Image
        alt=""
        src="/static/img/cm_logo.png"
        width={100}
        height={100}
      />
    );
    // }
  };

  return (
    <form onSubmit={() => { }} >
      <Card>
        <CardContent className="p-8">
          <Typography gutterBottom variant="h3">
            Create Product
          </Typography>


          <TextField

            label="Name"
            // error={Boolean(errors.name?.message)}
            // helperText={errors.name?.message?.toString()}
            variant="outlined"
            margin="normal"
            fullWidth
            autoFocus
          />


          <TextField

            label="Price"
            // error={Boolean(errors.price?.message)}
            // helperText={errors.price?.message?.toString()}
            variant="outlined"
            margin="normal"
            fullWidth
            autoFocus
          />


          <TextField

            label="Stock"
            // error={Boolean(errors.stock?.message)}
            // helperText={errors.stock?.message?.toString()}
            variant="outlined"
            margin="normal"
            fullWidth
            autoFocus
          />

          <Box>{showPreviewImage()}</Box>

          <TextField
            className="mt-4"
            type="file"
            fullWidth
            onChange={(e: React.ChangeEvent<any>) => {
              e.preventDefault();
              // setValue("file", e.target.files[0]); // for upload
              // setValue("file_obj", URL.createObjectURL(e.target.files[0])); // for preview image
            }}
          />
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            className="mr-2"
          >
            Create
          </Button>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => router.push("/stock")}
          >
            Cancel
          </Button>
        </CardActions>
      </Card>
    </form>
  )
}