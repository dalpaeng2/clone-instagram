import NavBar from '@/app/component/NavBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="ml-60 pt-6 pl-8">{children}</div>
    </>
  );
}
