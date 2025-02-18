"use client";

import { useAppDispatch } from "@/hooks/redux.hooks";
import {
  seedProduct,
  useProduct,
} from "@/lib/redux/features/product/productSlice";
import type { ProductType } from "@/types";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useMemo } from "react";

const SeedProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { products } = useProduct();
  const dispatch = useAppDispatch();

  const seedProducts: ProductType[] = useMemo(
    () => [
      {
        id: nanoid(),
        name: "Wireless Headphones",
        price: 99.99,
        image:
          "https://i.ibb.co.com/8gG0PTqZ/Soundcore-H30i-Wireless-On-Ear-Headphones-Foldable-Design-Pure-Bass-70-H-Playtime-Bluetooth-5-3-Ligh.webp",
        category: { value: "accessories", label: "Accessories" },
        status: {
          value: "in-stock",
          label: "In Stock",
        },
      },
      {
        id: nanoid(),
        name: "Smartphone",
        price: 699.99,
        image:
          "https://i.ibb.co.com/RG0LZ68f/Xiaomi-Redmi-Note-12-Pro-Plus-2.png",
        category: { value: "accessories", label: "Accessories" },
        status: {
          value: "in-stock",
          label: "In Stock",
        },
      },
      {
        id: nanoid(),
        name: "Gaming Chair",
        price: 199.99,
        image:
          "https://i.ibb.co.com/1YDCxV0r/GTRACING-GTWD-200-Gaming-Chair-with-Footrest-Height-Adjustable-Office-Swivel-Reclining-White-43754c7.webp",
        category: { value: "accessories", label: "Accessories" },
        status: {
          value: "out-of-stock",
          label: "Out of Stock",
        },
      },
    ],
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!products || products.length === 0) {
        dispatch(seedProduct(seedProducts));
        console.log("✅ Seed data added to local storage.");
      } else {
        console.log("⚡ Local storage already contains product data.");
      }
    }
  }, [products, seedProducts, dispatch]);

  return children;
};

export default SeedProvider;
