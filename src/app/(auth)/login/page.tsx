"use client"
import { Box, Card, CardContent, InputAdornment, TextField, Typography, Button, Alert, CardMedia } from "@mui/material"
import React from 'react'
import * as Icons from "@mui/icons-material/";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import { add, signIn, userSelector } from "@/store/slices/userSlice";
import { useAppDispatch } from "@/store/store";


interface User {
  username: string;
  password: string;
}
type Props = {}

export default function Login({ }: Props) {
  const router = useRouter();
  const initialValue: User = { username: "", password: "" };

  const formValidateSchema = Yup.object().shape({
    username: Yup.string().required("Username is required").trim(),
    password: Yup.string().required("Password is required").trim(),
  });

  const reducer = useSelector(userSelector)
  const dispatch = useAppDispatch()

  const { control, handleSubmit, formState: { errors } } = useForm<User>({ defaultValues: initialValue, resolver: yupResolver(formValidateSchema) })

  const showForm = () => {
    return <form onSubmit={handleSubmit(async (value: User) => {
      const result = await dispatch(signIn(value));

      if (signIn.fulfilled.match(result)) {
        router.push("/stock");
      }
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
          type="password"
          autoComplete="Password"
          autoFocus
        />
      )}></Controller>
      {reducer.status == "failed" && (<Alert severity="error">login failed</Alert>)
      }
      <Button
        className="mt-8"
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={reducer.status == "fetching"}
      >
        Login
      </Button>
      <Button
        className="mt-4"
        onClick={() => {
          dispatch(add());
          router.push("/register")
        }}
        type="button"
        fullWidth
        variant="outlined"
      >
        Register
      </Button>
    </form >;
  }
  return (
    <Box className="flex justify-center items-center">
      <Card className="max-w-[345px] mt-[100px]">
        <CardMedia
          sx={{ height: 200 }}
          image="/static/img/next_login.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Login({reducer.count})
          </Typography>
          {showForm()}
        </CardContent>
      </Card>
      <style jsx global>
        {`
          body {
            min-height: 100vh;
            position: relative;
            margin: 0;
            background-size: cover;
            background-image: url("/static/img/bg4.jpg");
            text-align: center;
          }
        `}
      </style>
    </Box>
  )
}