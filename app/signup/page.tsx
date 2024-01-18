import Link from 'next/link';
import React from 'react';

function Signup() {
  return (
    <>
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
            <form>
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
                id="email"
                placeholder="이메일 주소"
                className="w-full py-2 px-3 border border-gray-300 rounded-lg mb-2"
              />
              <input
                type="text"
                placeholder="성명"
                className="w-full py-2 px-3 border border-gray-300 rounded-lg mb-2"
              />
              <input
                type="text"
                placeholder="사용자 이름"
                className="w-full py-2 px-3 border border-gray-300 rounded-lg mb-2"
              />
              <input
                type="password"
                placeholder="비밀번호"
                className="w-full py-2 px-3 border border-gray-300 rounded-lg mb-2"
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
    </>
  );
}

export default Signup;
