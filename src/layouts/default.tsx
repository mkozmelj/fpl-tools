import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

type LayoutProps = {
  children: JSX.Element;
};

export default function DefaultLayout({ children }: Readonly<LayoutProps>) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow p-2">
        {children}
      </main>
      <Footer />
    </div>
  );
}
