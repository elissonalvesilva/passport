"use client";
import { Config } from "@/config";
import { Messages } from "@/config/messages";
import { useAuth } from "@/lib/contexts/AuthContext";
import { usePathname } from "next/navigation";


export default function Banner() {
  const pathname = usePathname();
  const { user } = useAuth();

  function bannerMessage() {
    const messages = {
      [Config.ROUTES.HOME]: Messages.BoasVindas.replace("{FIRST_NAME}", user?.first_name || ""),
      [Config.ROUTES.TASKS]: Messages.Tasks,
      [Config.ROUTES.PROFILE]: "",
    }[pathname]

    return messages;
  }
  return (
    <>
      <div className="flex flex-col mt-10">
        <h1 className="text-xl font-medium mb-2">{bannerMessage()}</h1>
      </div>
    </>
  )
}