import Post from '@/app/component/Post';
import { supabaseServer } from '@/lib/supabase/server';

export default async function Home() {
  const supabase = supabaseServer();

  const { data: posts, error } = await supabase
    .from('posts')
    .select(
      `
      id,
      content,
      created_at,
      photo_url,
      profiles(email)`
    )
    .order('created_at', { ascending: false });

  return (
    <div className="flex w-full">
      <div className="sm:w-[600px] flex flex-col gap-4 items-center pt-3">
        <div className="sm:w-[500px] flex flex-col gap-1 border-b">
          {posts?.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
