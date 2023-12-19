"use client"
import { Box, Card, CardContent, InputAdornment, TextField, Typography, Button } from "@mui/material"
import React from 'react'
import * as Icons from "@mui/icons-material/";

type Props = {}

export default function Register({ }: Props) {
  const showForm = () => {
    return <form >
      {/* Username */}
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icons.Email />
            </InputAdornment>
          ),
        }}
        label="Username"
        autoComplete="email"
        autoFocus
      />
      {/* password */}
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icons.Password />
            </InputAdornment>
          ),
        }}
        label="password"
        autoComplete="Password"
        autoFocus
      />
          <Button
          className="mt-8"
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Create
        </Button>
         <Button
          className="mt-4"
          onClick={() => {}}
          type="button"
          fullWidth
          variant="outlined"
        >
          Cancel
        </Button>
    </form>;
  }
  return (
    <Box className="flex justify-center items-center">
      <Card className="max-w-[345px] mt-[100px]">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Register
          </Typography>
          {showForm()}
        </CardContent>
      </Card>
    </Box>
  )
}