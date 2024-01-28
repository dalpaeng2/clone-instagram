import NavBar from '@/app/component/NavBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-blue-900">
        <NavBar />
      </div>
      <div className="sm:ml-60 pt-6 sm:pl-8 px-4">{children}</div>
    </>
  );
}
