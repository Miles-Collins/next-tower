import Footer from "./Util/Footer.jsx";
import Navbar from "./Util/Navbar.jsx";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
