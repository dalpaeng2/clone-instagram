'use client';
import { supabaseBrowser } from '@/lib/supabase/browser';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoIosLogOut } from 'react-icons/io';

function Logout() {
  const router = useRouter();
  const supabase = supabaseBrowser();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="flex justify-between items-center gap-2"
    >
      <IoIosLogOut className="text-3xl" />
      <span className="hidden sm:block">로그아웃</span>
    </button>
  );
}

export default Logout;
