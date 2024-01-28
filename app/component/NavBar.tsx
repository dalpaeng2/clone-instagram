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
    <div className="sm:h-dvh fixed bottom-0 w-full sm:top-0 sm:w-60 sm:border-r border-t bg-white border-slate-400">
      <div className="flex flex-col p-2 justify-between h-full">
        <div className="flex flex-col">
          <div className="hidden sm:block text-lg p-2 mb-4">Instagram</div>
          <div className="flex flex-row justify-around sm:flex-col sm:justify-between">
            <div className="p-2">
              <Link href="/">
                <div className="flex justify-left gap-2 items-center">
                  <RiHomeSmileLine className="text-3xl" />
                  <div className="hidden sm:block">홈</div>
                </div>
              </Link>
            </div>
            <div className="p-2">
              <Link href="/">
                <div className="flex justify-left gap-2 items-center">
                  <IoSearchOutline className="text-3xl" />
                  <div className="hidden sm:block">검색</div>
                </div>
              </Link>
            </div>
            <div className="p-2">
              <Link href="/create-post">
                <div className="flex justify-left gap-2 items-center">
                  <FiPlusSquare className="text-3xl" />
                  <div className="hidden sm:block">만들기</div>
                </div>
              </Link>
            </div>
            <div className="p-2">
              <Link href="/profile">
                <div className="flex justify-left gap-2 items-center">
                  <RxAvatar className="text-3xl" />
                  <div className="hidden sm:block">프로필</div>
                </div>
              </Link>
            </div>
            <div className="sm:hidden p-2">
              <Link href="/">
                <div className="flex justify-left gap-2 items-center">
                  <IoIosLogOut className="text-3xl" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden sm:block p-2">
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
