import "./styles/globals.css";
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header>
          <nav>
            <Link href="/">Inicio</Link>
            <Link href="/acerca-de-mi">Acerca de mí</Link>
            <Link href="/documentacion">Documentación</Link>
            <Link href="/curso">Curso</Link>
            <Link href="/contacto">Contacto</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2024 Lengua de Señas Argentina - Oriana Olaia</footer>
      </body>
    </html>
  );
}
