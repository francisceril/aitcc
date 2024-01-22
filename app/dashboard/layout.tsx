import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen max-h-screen">
      <div className="flex h-full">
        <Sidebar />
        <main className="scrollbar-none flex w-full flex-1 flex-col overflow-x-hidden">
          <Header />
          <div className="flex-1 overflow-y-auto p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
