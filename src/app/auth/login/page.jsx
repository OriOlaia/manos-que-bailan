"use client"

import { useForm } from 'react-hook-form'
import {signIn} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import {useState} from 'react'

function LoginPage() {

  const {register, handleSubmit, formState: {errors}} = useForm()
  const router = useRouter()
  const [error, setError] = useState(null)

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    const res = await signIn('credentials',{
      email: data.email,
      password: data.password,
      redirect: false,
    })

    if (res.error){
      setError(res.error)
    } else {
      router.push('/dashboard')
      router.refresh()
    }

    console.log(res)

  })

  return (
    <div className="container">
      <h1>INICIO DE SESION</h1>
      <form onSubmit={onSubmit} className="row">

        {error && (
          <p className='text-danger'>{error}</p>
        )}

          <div className="row">
            <div className="col-4 form-floating">
              <input type="email"
              {...register("email", {
                required: {
                  value:true,
                  message: "Correo requerido",
                },
              })}
              className="form-control" id="floatingEmail" placeholder="prueba@prueba.com"/>
              <label className="form-label" htmlfor="FloatingEmail">Correo</label>
              {errors.email && (
                  <span className="text-danger">{errors.email.message}</span>
                )}
            </div>
          </div>
          <div className="row">
            <div className="col-4 form-floating mb-3">
              <input type="password" 
              {...register("password", {
                required: {
                  value:true,
                  message: "Contraseña requerida",
                },
              })}
              className="form-control" id="floatingPassword" placeholder="******"/>
              <label className="form-label" htmlfor="floatingPassword">Contraseña</label>
              {errors.password && (
                  <span className="text-danger">{errors.password.message}</span>
                )}
            </div>
          </div>
          <button type="submit" className="col-2 btn btn-primary">Iniciar Sesion</button>
        </form>
    </div>
  )
}
export default LoginPage
