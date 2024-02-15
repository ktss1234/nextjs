"use client";


import { getSession, userSelector } from "@/store/slices/userSlice";
import { store } from "@/store/store";
import { Box } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";


type Props = {};

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    store.dispatch(getSession());
  }, []);


  // const path = usePathname();
  // const router = useRouter();
  // const userReducer = useSelector(userSelector);

  // // is fetching session (eg. show spinner)
  // if (userReducer.isAuthenticating) {
  //   return (
  //     <Loading />
  //   );
  // }
  // // If user is not logged in, return login component
  // if (path !== "/login" && path !== "/register") {
  //   if (!userReducer.isAuthenticated) {
  //     router.push(`/login`);
  //     return <Loading />;
  //   } else if (path == "/") {
  //     router.push(`/stock`); // default page after login when call root path
  //     return <Loading />;
  //   }
  // } else {
  //   if (userReducer.isAuthenticated) {
  //     router.push(`/stock`); // default page after login

  //     return null;
  //   }
  // }


  return <div>{children}</div>;
}