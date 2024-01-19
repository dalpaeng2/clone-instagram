'use client';

import { createBrowserClient } from '@supabase/ssr';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    try {
      const r = await supabase.auth.signUp({ email, password });
      router.push('/login');
      // ! TODO: show toast

      setEmail('');
      setPassword('');
      setFullName('');
      setUsername('');
    } catch (e: any) {
      console.log(e);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'fullName') {
      setFullName(value);
    } else if (name === 'username') {
      setUsername(value);
    }
  };

  return (
    <div className="flex flex-col gap-2 mx-auto max-w-96 mt-4">
      <div className="border-2 px-6">
        <div className="flex justify-center py-2">
          <div className="text-lg">Instagram Clone</div>
        </div>
        <div className="flex justify-center">
          <div className="text-gray-400">
            친구들의 사진과 동영상을 보려면 가입하세요.
          </div>
        </div>
        <div className="mt-4 mb-4">
          <form onSubmit={handleSubmit}>
            <button className="bg-blue-600 py-2 text-white w-full rounded-lg">
              Facebook으로 로그인
            </button>
            <div className="flex justify-center items-center py-4">
              <div className="border-b-2 border-gray-300 w-1/3"></div>
              <div className="px-2 text-sm text-gray-500">또는</div>
              <div className="border-b-2 border-gray-300 w-1/3"></div>
            </div>
            <input
              type="email"
              name="email"
              placeholder="이메일 주소"
              className="w-full py-2 px-3 border border-gray-300 rounded-lg mb-2"
              value={email}
              onChange={onChange}
            />
            <input
              type="text"
              name="fullName"
              placeholder="성명"
              className="w-full py-2 px-3 border border-gray-300 rounded-lg mb-2"
              value={fullName}
              onChange={onChange}
            />
            <input
              type="text"
              name="username"
              placeholder="사용자 이름"
              className="w-full py-2 px-3 border border-gray-300 rounded-lg mb-2"
              value={username}
              onChange={onChange}
            />
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              className="w-full py-2 px-3 border border-gray-300 rounded-lg mb-2"
              value={password}
              onChange={onChange}
            />
            <button className="bg-blue-600 py-2 text-white w-full rounded-lg">
              가입
            </button>
          </form>
        </div>
      </div>
      <div className="border-2 px-6 py-6 flex justify-center">
        <div className="flex gap-1">
          <span>계정이 있으신가요?</span>
          <Link href="/login" className="text-blue-500">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
