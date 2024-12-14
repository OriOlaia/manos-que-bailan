import Link from "next/link";
import {getServerSession} from 'next-auth/next'
import {authOptions} from '../../app/api/auth/[...nextauth]/route'

async function Navbar() {

    const session = await getServerSession(authOptions)
    console.log(session)

  return (
    <div>
        <header className="header container-fluid">
          <a href="\" className="logo text-white">
            MB
          </a>
          <nav className='navbar'>
            {
                !session?.user ? (
                    <>
                        <Link href="/" className="text-white">Inicio</Link>
                        <Link href="/about " className="text-white">Acerca de mí</Link>
                        <Link href="/documentation" className="text-white">Documentación</Link>
                        <Link href="/course" className="text-white">Curso</Link>
                        <Link href="/contact" className="text-white">Contacto</Link>
                        <Link href="/auth/login" className="text-white">Iniciar Sesion</Link>
                        <Link href="/auth/register" className="text-white">Registrar</Link>
                    
                    </>
                ) : (
                    <>
                        <Link href="/" className="text-white">Inicio</Link>
                        <Link href="/about " className="text-white">Acerca de mí</Link>
                        <Link href="/documentation" className="text-white">Documentación</Link>
                        <Link href="/contact" className="text-white">Contacto</Link>
                        <Link href="/dashboard" className="text-white">Perfil</Link>
                        <Link href="/api/auth/signout" className="text-white">Cerrar Sesion</Link>
                    </>
                )
            }
          </nav>
        </header>
    </div>
    
  )
}

export default Navbar
