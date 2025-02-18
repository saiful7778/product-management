"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { store, AppStore } from "@/lib/redux/store";

const ReduxProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const storeRef = useRef<AppStore>(undefined);

  if (!storeRef.current) {
    storeRef.current = store();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default ReduxProvider;
