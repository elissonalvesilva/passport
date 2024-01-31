import { IoHomeOutline } from "react-icons/io5";
import { BsTicketPerforated } from "react-icons/bs";
import { RiUser5Line } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 bg-footer left-0 right-0 pb-4 px-16">
      <div className="flex justify-between">
        <div className="text-xl pt-3 px-2 pb-1 footer-tab-active">
          <IoHomeOutline />
        </div>
        <div className="text-xl pt-3 px-2 pb-1 footer-tab-inactive">
          <BsTicketPerforated className="text-xl" />
        </div>
        <div className="text-xl pt-3 px-2 pb-1 footer-tab-inactive">
          <RiUser5Line className="text-xl" />
        </div>
      </div>
    </footer>
  );
}