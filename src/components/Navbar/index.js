"use client";

import { useRouter } from "next/navigation";

import { IoLocationSharp } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

function DefaultNavbar({ churchName }) {
  return (
    <>
      <div className="flex justify-between mb-5">
        <div className="flex items-center bg-primary rounded-full pt-2.5 pb-2 px-3">
          <IoLocationSharp className="text-typography mr-1.5" />
          <h1 className="text-typography text-xs">{churchName}</h1>
        </div>
        <div className="flex bg-primary items-center rounded-full py-2 px-2	">
          <IoIosNotificationsOutline className="text-typography text-lg" />
        </div>
      </div>
    </>
  )
}

function ProfileNavbar() {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-between mb-5 p-6">
        <div className="flex items-center bg-white rounded-full p-2" onClick={() => router.back()}>
          <IoArrowBack className="text-typography-black text-lg" />
        </div>
        <div className="grow text-center">
          <h1 className="text-white font-light mr-6 mt-1">Perfil</h1>
        </div>
      </div>
    </>
  )
}

export default function Navbar({ churchName = "Ingleses", type = "default"}) {
  if (type === "default") {
    return <DefaultNavbar churchName={churchName} />
  }

  return <ProfileNavbar />
}