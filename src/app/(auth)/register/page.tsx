"use client"
import { Box, Card, CardContent, InputAdornment, TextField, Typography, Button } from "@mui/material"
import React from 'react'
import * as Icons from "@mui/icons-material/";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
interface User {
  username: string;
  password: string;
}


type Props = {}

export default function Register({ }: Props) {
  const initialValue: User = { username: "", password: "" };
  const formValidateSchema = Yup.object().shape({
    username: Yup.string().required("Username is required").trim(),
    password: Yup.string().required("Password is required").trim(),
  });
  const { control, handleSubmit, formState: { errors } } = useForm<User>({ defaultValues: initialValue, resolver: yupResolver(formValidateSchema) })

  const showForm = () => {
    return <form onSubmit={handleSubmit((value: User) => {
      alert(JSON.stringify(value))
    })}>
      {/* Username */}

      <Controller name="username" control={control} render={({ field }) => (
        <TextField
          {...field}
          error={(errors.username?.message ?? "") != ''}
          helperText={errors.username?.message?.toString()}
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
        />)

      }></Controller>
      {/* password */}
      <Controller name="password" control={control} render={({ field }) => (
        <TextField
          {...field}
          error={(errors.password?.message ?? "") != ''}
          helperText={errors.password?.message?.toString()}
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
      )}></Controller>

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
        onClick={() => { }}
        type="button"
        fullWidth
        variant="outlined"
      >
        Cancel
      </Button>
    </form >;
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