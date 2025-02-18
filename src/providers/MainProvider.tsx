"use client";
import ReduxProvider from "./ReduxProvider";
import SeedProvider from "./SeedProvider";
import ThemeProvider from "./ThemeProvider";
import { Toaster } from "react-hot-toast";

const MainProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ReduxProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <SeedProvider>{children}</SeedProvider>
      </ThemeProvider>
      <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          className: "hot-toast-item",
          duration: 2000,
          removeDelay: 1000,
        }}
      />
    </ReduxProvider>
  );
};

export default MainProvider;
