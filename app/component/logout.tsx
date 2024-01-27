'use client';
import { supabaseBrowser } from '@/lib/supabase/browser';
import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation';
import React from 'react';

function Logout() {
  const router = useRouter();
  const supabase = supabaseBrowser();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return <button onClick={handleLogout}>로그아웃</button>;
}

export default Logout;
