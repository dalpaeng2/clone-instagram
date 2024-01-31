/* eslint-disable @next/next/no-img-element */
import { supabaseServer } from '@/lib/supabase/server';
import React from 'react';

async function Profile() {
  const supabase = supabaseServer();

  const photos = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <div className="flex flex-col gap-8 max-w-3xl">
        <div className="flex gap-8">
          <div className="bg-slate-400 rounded-full w-32 h-32"></div>
          <div className="flex flex-col justify-between">
            <div>
              <div className="text-2xl">username</div>
            </div>
            <div className="flex gap-4">
              <span>게시물 1</span>
              <span>팔로워 1</span>
              <span>팔로우 1</span>
            </div>
            <div>
              <div className="text-sm">이름</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 place-items-stretch gap-2 w-3xl">
          {photos.map((photo) => (
            <img
              key={photo}
              className="bg-slate-400 object-cover"
              src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
              alt=""
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Profile;
