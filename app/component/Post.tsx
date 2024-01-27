/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { cookies } from 'next/headers';
import { FaRegHeart } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import { supabaseServer } from '@/lib/supabase/server';

type PostProps = {
  post: {
    id: string;
    content: string;
    created_at: string;
    photo_url: string;
    profiles: {
      email: string;
    }[];
  };
};

async function Post({ post }: PostProps) {
  const supabase = supabaseServer();

  const {
    data: { publicUrl: photoUrl },
  } = await supabase.storage.from('photo').getPublicUrl(post?.photo_url);

  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <div className="bg-blue-200 w-6 h-6 rounded-full"></div>
          <div className="text-sm">{post?.profiles[0]?.email}</div>
          <div className="text-xs text-slate-600">1일</div>
        </div>
        <div>...</div>
      </div>
      <img src={photoUrl} alt="" className="w-full" />
      <div className="flex gap-3 text-lg">
        <FaRegHeart />
        <FaRegComment />
      </div>
      <div className="text-sm">좋아요 100개</div>
      <div>
        {post?.profiles[0]?.email} - {post?.content}
      </div>
      <div className="text-sm text-slate-600">댓글 100개 모두 보기</div>
      <input
        type="text"
        className="text-sm border-b-2 border-slate-300 w-full p-2 mb-4"
        placeholder="댓글 달기..."
      />
    </>
  );
}

export default Post;
