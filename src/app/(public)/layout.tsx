import Topbar from "@/components/shared/Topbar";

const PublicLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <header className="container mx-auto px-4 mb-4">
        <Topbar />
      </header>
      <main className="container mx-auto px-4">{children}</main>
    </>
  );
};

export default PublicLayout;
