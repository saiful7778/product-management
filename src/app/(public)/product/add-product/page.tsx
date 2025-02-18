import { type Metadata } from "next";
import AddProductForm from "./_components/AddProductForm";
import GoBackButton from "@/components/GoBackButton";

export const metadata: Metadata = {
  title: "Add Product",
  description: "Add a new product to the inventory",
};

const AddProduct = () => {
  return (
    <div className="space-y-4 mb-4">
      <GoBackButton />
      <AddProductForm />
    </div>
  );
};

export default AddProduct;
