import { IoLocationSharp } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Navbar({ churchName = "Ingleses" }) {
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