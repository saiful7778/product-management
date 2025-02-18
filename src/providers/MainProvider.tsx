"use client";
import ReduxProvider from "./ReduxProvider";
import SeedProvider from "./SeedProvider";
import ThemeProvider from "./ThemeProvider";

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
    </ReduxProvider>
  );
};

export default MainProvider;
