import { Button } from "@/components/shadcn/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="text-right">
        <Button asChild>
          <Link href="/product/add-product">
            <Plus />
            <span>Add product</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
