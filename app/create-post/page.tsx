'use client';

import { createBrowserClient } from '@supabase/ssr';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function CreatePost() {
  const [content, setContent] = useState('');
  const [file, setFile] = useState<File | undefined>(undefined);

  const router = useRouter();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      console.error('You must be logged in to create a post');
      return;
    }

    // Upload image to Supabase Storage
    let fileName = '';
    if (file) {
      const fileExt = (file as File).name.split('.').pop();
      fileName = `${user.id}/${uuid()}.${fileExt}`;
      const { data, error } = await supabase.storage
        .from('photo')
        .upload(fileName, file);

      if (error) {
        console.error('Error uploading file:', error);
        return;
      }
    }

    // Insert post data into Supabase
    const { data, error } = await supabase.from('posts').insert([
      {
        content,
        photo_url: fileName,
        user_id: user.id,
      },
    ]);

    if (error) {
      console.error('Error inserting data:', error);
      return;
    }

    router.push('/');
  };

  return (
    <div className="pt-4 w-1/3 mx-auto">
      <p>Post 만들기</p>
      <form
        className="flex flex-col gap-1 border-gray-100"
        onSubmit={handleSubmit}
      >
        <textarea
          placeholder="content"
          className="border-1 border-red-200 p-2 rounded-lg"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="file" onChange={(e) => setFile(e.target.files?.[0])} />
        <button className="bg-blue-400 text-slate-600 rounded-lg" type="submit">
          Create Post
        </button>
      </form>
    </div>
  );
}
