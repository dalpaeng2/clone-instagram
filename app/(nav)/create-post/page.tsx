'use client';

import { supabaseBrowser } from '@/lib/supabase/browser';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function CreatePost() {
  const [content, setContent] = useState('');
  const [file, setFile] = useState<File | undefined>(undefined);

  const router = useRouter();

  const supabase = supabaseBrowser();

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
    <div className="w-1/3">
      <p className="text-lg mb-4">Post 만들기</p>
      <form
        className="flex flex-col gap-2 border-gray-100"
        onSubmit={handleSubmit}
      >
        <textarea
          placeholder="content"
          className="border-2 border-slate-400 p-2 rounded-lg"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="file" onChange={(e) => setFile(e.target.files?.[0])} />
        <button
          className="bg-blue-400 text-slate-800 rounded-lg py-2"
          type="submit"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}
