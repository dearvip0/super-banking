import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <div className="mobilenav-sheet">
            <Image src="/icons/logo.svg" alt="logo" width={30} height={30} />
            <div>
              <section className="w-full max-w-[264px]">
                <div className="mobilenav-sheet">MobileNav</div>
              </section>
            </div>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
