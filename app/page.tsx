import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import Logout from '@/app/component/logout';
import Login from './login/page';
import Link from 'next/link';

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

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="flex">
      <div className="h-dvh fixed top-0 w-60 border-r border-slate-400">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col">
            <div className="text-lg p-2 mb-4">Instagram</div>
            <div>
              <div className="p-2">
                <div className="flex justify-left gap-2 items-center">
                  <div className="bg-gray-400 w-6 h-6 rounded-full"></div>
                  <div>
                    <Link href="/">홈</Link>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="flex justify-left gap-2 items-center">
                  <div className="bg-gray-400 w-6 h-6 rounded-full"></div>
                  <div>검색</div>
                </div>
              </div>
              <div className="p-2">
                <div className="flex justify-left gap-2 items-center">
                  <div className="bg-gray-400 w-6 h-6 rounded-full"></div>
                  <div>만들기</div>
                </div>
              </div>
              <div className="p-2">
                <div className="flex justify-left gap-2 items-center">
                  <div className="bg-gray-400 w-6 h-6 rounded-full"></div>
                  <div>프로필</div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div className="flex justify-left gap-2 items-center">
              <div className="bg-gray-400 w-6 h-6 rounded-full"></div>
              <Logout />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full ml-60">
        <div className="w-[600px] flex flex-col gap-4 items-center pt-3">
          <div className="w-[500px] flex flex-col gap-1 border-b">
            <div className="flex justify-between items-center p-2">
              <div className="flex items-center gap-2">
                <div className="bg-blue-200 w-6 h-6 rounded-full"></div>
                <div className="text-sm">유저 1</div>
                <div className="text-xs text-slate-600">1일</div>
              </div>
              <div>...</div>
            </div>
            <div className="bg-slate-400 w-full h-[400px]"></div>
            <div className="flex gap-3">
              <div>하트</div>
              <div>댓글</div>
            </div>
            <div className="text-sm">좋아요 100개</div>
            <div>유저 1 - 내용</div>
            <div className="text-sm text-slate-600">댓글 100개 모두 보기</div>
            <div className="text-sm text-slate-600">댓글 달기</div>
          </div>
          <div className="w-[500px] flex flex-col gap-1 border-b">
            <div className="flex justify-between items-center p-2">
              <div className="flex items-center gap-2">
                <div className="bg-blue-200 w-6 h-6 rounded-full"></div>
                <div className="text-sm">유저 1</div>
                <div className="text-xs text-slate-600">1일</div>
              </div>
              <div>...</div>
            </div>
            <div className="bg-slate-400 w-full h-[400px]"></div>
            <div className="flex gap-3">
              <div>하트</div>
              <div>댓글</div>
            </div>
            <div className="text-sm">좋아요 100개</div>
            <div>유저 1 - 내용</div>
            <div className="text-sm text-slate-600">댓글 100개 모두 보기</div>
            <div className="text-sm text-slate-600">댓글 달기</div>
          </div>
        </div>
        <div className="w-60">
          <div>
            <div className="py-3">회원님을 위한 추천</div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex gap-1 justify-start items-center">
                  <div className="bg-slate-500 rounded-full w-8 h-8"></div>
                  <div>회원 1</div>
                </div>
                <div className="text-blue-500">팔로우</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-1 justify-start items-center">
                  <div className="bg-slate-500 rounded-full w-8 h-8"></div>
                  <div>회원 2</div>
                </div>
                <div className="text-blue-500">팔로우</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-1 justify-start items-center">
                  <div className="bg-slate-500 rounded-full w-8 h-8"></div>
                  <div>회원 3</div>
                </div>
                <div className="text-blue-500">팔로우</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
