/* eslint-disable @next/next/no-img-element */
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import Logout from '@/app/component/logout';
import Login from './login/page';
import Link from 'next/link';
import { RiHomeSmileLine } from 'react-icons/ri';
import { IoSearchOutline } from 'react-icons/io5';
import { FiPlusSquare } from 'react-icons/fi';
import { IoIosLogOut } from 'react-icons/io';
import { RxAvatar } from 'react-icons/rx';
import { FaRegHeart } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import Image from 'next/image';

export default async function Home() {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  const { data: posts, error } = await supabase.from('posts').select(`
      id,
      content,
      created_at,
      photo_url,
      profiles(email)`);

  return (
    <div className="flex">
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
                <Link href="/">
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
      <div className="flex w-full ml-60">
        <div className="w-[600px] flex flex-col gap-4 items-center pt-3">
          <div className="w-[500px] flex flex-col gap-1 border-b">
            {posts?.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

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
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

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
        className="text-sm border-b-1 border-slate-400 w-full p-2"
        placeholder="댓글 달기..."
      />
    </>
  );
}
