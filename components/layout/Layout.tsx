import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
return (
<>
<Header />
<main className="min-h-screen">{children}</main>
<Footer />
</>
);
};


export default Layout;