import Topbar from "@/components/shared/Topbar";

const PublicLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <header className="container mx-auto px-2 sm:px-4 mb-2 sm:mb-4">
        <Topbar />
      </header>
      <main className="container mx-auto px-2 sm:px-4">{children}</main>
    </>
  );
};

export default PublicLayout;
