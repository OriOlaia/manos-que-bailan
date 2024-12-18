import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Particles from "./components/Particles"

export default function RootLayout({ children }){
  return (
    <html lang="es">
      <body className="text-body text-black">
        {/* Partículas */}
        <Particles />
          <Navbar />
          <main className="container">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
