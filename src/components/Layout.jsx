const Layout = ({ children }) => {
  return (
    <div className="max-w-[90%] mx-auto lgmax:max-w-[95%] flex flex-col min-h-screen">
      {children}
    </div>
  );
};

export default Layout;
