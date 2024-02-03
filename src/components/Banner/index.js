"use client";

import { useAuth } from "@/lib/contexts/AuthContext";


export default function Banner({ firstName = "" }) {
  const { user } = useAuth();
  return (
    <>
      <div className="flex flex-col mt-10">
        <h1 className="text-xl font-medium mb-2">Olá {user.first_name}!</h1>
      </div>
    </>
  )
}