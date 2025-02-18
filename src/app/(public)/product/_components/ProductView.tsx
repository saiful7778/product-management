import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/shadcn/ui/dialog";
import { type ProductType } from "./ProductTableColumn";
import Image from "next/image";

const ProductView: React.FC<{
  productData: ProductType;
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ productData, open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Product</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <figure className="w-40 aspect-square mx-auto rounded overflow-hidden">
          <Image
            src={productData.image}
            width={160}
            height={160}
            className="w-full h-full object-cover object-center"
            alt={`${productData.name} image`}
          />
        </figure>
        <div className="my-2 grid grid-cols-2 gap-2">
          <div className="col-span-2">
            <div className="font-bold">Name:</div>
            <div>{productData.name}</div>
          </div>
          <div className="col-span-2">
            <div className="font-bold">Price:</div>
            <div>${productData.price}</div>
          </div>
          <div>
            <div className="font-bold">Status:</div>
            <div>{productData.status.label}</div>
          </div>
          <div>
            <div className="font-bold">Category:</div>
            <div>{productData.category.label}</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductView;
