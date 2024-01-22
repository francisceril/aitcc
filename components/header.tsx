import { cn } from "@/lib/utils";
import { OrgSwitcher } from "./org-switcher";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Header({ className }: HeaderProps) {
  return (
    <header className="bg-background flex h-12 max-h-12 items-center justify-between border-b border-dashed px-8 py-2">
      <OrgSwitcher />
      <div>bb</div>
    </header>
  );
}
