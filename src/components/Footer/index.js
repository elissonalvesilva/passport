import { IoHomeOutline } from "react-icons/io5";
import { BsTicketPerforated } from "react-icons/bs";
import { RiUser5Line } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 bg-footer left-0 right-0 pb-4 px-16">
      <div className="flex justify-between">
        <div className="flex flex-col pt-3 text-xl px-2 pb-1 footer-tab__active">
          <IoHomeOutline className="mt-2 text-xl" />
        </div>
        <div className="flex flex-col pt-3 text-xl px-2 pb-1 footer-tab__inactive">
          <BsTicketPerforated className="mt-2 text-xl" />
        </div>
        <div className="flex flex-col pt-3 text-xl px-2 pb-1 footer-tab__inactive">
          <RiUser5Line className="mt-2 text-xl" />
        </div>
      </div>
    </footer>
  );
}