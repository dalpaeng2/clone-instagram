'use client';
import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation';
import React from 'react';

function Logout() {
  const router = useRouter();
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return <button onClick={handleLogout}>로그아웃</button>;
}

export default Logout;
