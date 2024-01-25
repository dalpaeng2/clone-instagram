import React from 'react';
import Link from 'next/link';
import { RiHomeSmileLine } from 'react-icons/ri';
import { IoSearchOutline } from 'react-icons/io5';
import { FiPlusSquare } from 'react-icons/fi';
import { IoIosLogOut } from 'react-icons/io';
import { RxAvatar } from 'react-icons/rx';
import Logout from '@/app/component/logout';

function NavBar() {
  return (
    <div className="h-dvh fixed top-0 w-60 border-r border-slate-400">
      <div className="flex flex-col p-2 justify-between h-full">
        <div className="flex flex-col">
          <div className="text-lg p-2 mb-4">Instagram</div>
          <div className="flex flex-col justify-between">
            <div className="p-2">
              <Link href="/">
                <div className="flex justify-left gap-2 items-center">
                  <RiHomeSmileLine className="" />
                  <div className="">홈</div>
                </div>
              </Link>
            </div>
            <div className="p-2">
              <Link href="/">
                <div className="flex justify-left gap-2 items-center">
                  <IoSearchOutline className="" />
                  <div className="">검색</div>
                </div>
              </Link>
            </div>
            <div className="p-2">
              <Link href="/create-post">
                <div className="flex justify-left gap-2 items-center">
                  <FiPlusSquare className="" />
                  <div className="">만들기</div>
                </div>
              </Link>
            </div>
            <div className="p-2">
              <Link href="/profile">
                <div className="flex justify-left gap-2 items-center">
                  <RxAvatar className="" />
                  <div className="">프로필</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="p-2">
          <Link href="/">
            <div className="flex justify-left gap-2 items-center">
              <IoIosLogOut className="" />
              <Logout />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
