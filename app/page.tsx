import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import Post from '@/app/component/Post';

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
    <div className="flex w-full">
      <div className="w-[600px] flex flex-col gap-4 items-center pt-3">
        <div className="w-[500px] flex flex-col gap-1 border-b">
          {posts?.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
