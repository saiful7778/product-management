import Link from "next/link";
import ThemeToggle from "../shadcn/ThemeToggle";

const Topbar: React.FC = () => {
  return (
    <div className="flex items-center gap-2 py-2 sm:py-4 border-b">
      <Link href="/" className="text-3xl uppercase font-bold">
        LOGO
      </Link>
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Topbar;
