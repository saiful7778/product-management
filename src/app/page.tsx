import { Button } from "@/components/shadcn/ui/button";
import { Box } from "lucide-react";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="text-right">
        <Button asChild>
          <Link href="/product">
            <Box className="w-4 h-4" />
            <span>Products</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
