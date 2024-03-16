"use client";

import classNames from 'classnames';
import { usePathname } from 'next/navigation'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Config } from '@/config'

export default function Layout({ children }) {

  const pathname = usePathname();
  const isProfile = pathname === Config.ROUTES.PROFILE;

  return (
      <div className={classNames("", isProfile ? "h-full bg-primary": "p-6")}>
        <Navbar type={isProfile ? "profile": "default"} />
        {
          !isProfile && <Banner />
        }
        {children}
        <Footer />
      </div>
  );
}