import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }){
  return (
    <html lang="es">
      <body className="container-fluid text-body text-black">
        <Navbar />
        <main className="container-fluid">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
