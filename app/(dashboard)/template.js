'use client'
import useAuth from "@/provider/AuthProvider";
import { useLayoutEffect } from "react";

export default function AuthorizationTemplate({ children }) {
  const { user, firstLoaded, isUser } = useAuth()

  useLayoutEffect(() => {
    console.log(firstLoaded);
    if (!firstLoaded) return
    if (!user) {
      window.location.href = '/login'
    }
    if (isUser()) {
      window.location.href = '/'
    }
  }, [firstLoaded, user])
  return <div>{children}</div>
}