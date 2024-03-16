"use client";

import Link from "next/link"; 
import { usePathname } from 'next/navigation'
import classNames from "classnames";
import { IoHomeOutline } from "react-icons/io5";
import { BsTicketPerforated } from "react-icons/bs";
import { RiUser5Line } from "react-icons/ri";
import { Config } from "@/config";

export default function Footer() {
  const pathname = usePathname();

  function isActive(route) {
    return pathname === route ? "footer-tab__active" : "footer-tab__inactive";
  }

  return (
    <footer className="fixed bottom-0 bg-footer left-0 right-0 pb-4 px-16">
      <div className="flex justify-between">
        <Link href={Config.ROUTES.HOME} className={classNames("flex flex-col pt-3 text-xl px-2 pb-1", isActive(Config.ROUTES.HOME))}>
          <IoHomeOutline className="mt-2 text-xl" />
        </Link>
        <Link href={Config.ROUTES.TASKS} className={classNames("flex flex-col pt-3 text-xl px-2 pb-1", isActive(Config.ROUTES.TASKS))}>
          <BsTicketPerforated className="mt-2 text-xl" />
        </Link>
        <Link href={Config.ROUTES.PROFILE} className={classNames("flex flex-col pt-3 text-xl px-2 pb-1", isActive(Config.ROUTES.PROFILE))}>
          <RiUser5Line className="mt-2 text-xl" />
        </Link>
      </div>
    </footer>
  );
}