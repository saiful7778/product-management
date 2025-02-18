import GoBackButton from "@/components/GoBackButton";
import FavoriteProductTable from "./_components/FavoriteProductTable";

const Favorites: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 justify-between">
        <GoBackButton />
      </div>
      <FavoriteProductTable />
    </div>
  );
};

export default Favorites;
