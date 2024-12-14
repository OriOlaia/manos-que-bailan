"use client"

import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

export default function RegisterPage (){
  
  const {
    register,
    handleSubmit, 
    formState: { errors } 
  } = useForm()

  const router = useRouter()

  const onSubmit = handleSubmit(async (data) =>{

    if (data.password !== data.confirmPassword) {
      return alert("Las contraseñas no coinciden")
    }

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (res.ok){
      router.push('/auth/login')
    }

  })

  console.log(errors)

  return (
      <div className="container">
        <form action="" onSubmit={onSubmit} className="row">
          <div className="row">
            <div className="col-4 form-floating">
              <input type="text" className="form-control" id="floatingInput" placeholder="Ori"
                {... register("username", {
                  required: {
                    value:true,
                    message: "Usuario requerido",
                  }
                })}
              />
              <label className="form-label" htmlfor="FloatingInput">Usuario</label>
              
              {errors.username && (
                  <span className="text-danger">{errors.username.message}</span>
                )}
    
            </div>
          </div>
          <div className="row">
            <div className="col-4 form-floating">
              <input type="email" className="form-control" id="floatingEmail" placeholder="prueba@prueba.com"
              {... register("email", {
                required: {
                  value:true,
                  message: "Correo requerido",
                }
              })}
              />
              <label className="form-label" htmlfor="FloatingEmail">Email</label>
              {errors.email && (
                  <span className="text-danger">{errors.email.message}</span>
                )}

            </div>
          </div>
          <div className="row">
            <div className="col-4 form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="123456"
                {... register("password", {
                required: {
                  value:true,
                  message: "Contraseña requerida",
                }
              })}
              />
              <label className="form-label" htmlfor="floatingPassword">Contraseña</label>
              {errors.password && (
                  <span className="text-danger">{errors.password.message}</span>
                )}

            </div>
          </div>
          <div className="row">
            <div className="col-4 form-floating mb-3">
              <input type="confirmPassword" className="form-control" id="floatingConfirmPassword" placeholder="123456"
                {... register("confirmPassword", {
                  required: {
                    value:true,
                    message: "Confirmación de contraseña requerida",
                  }
                })}
              />
              <label className="form-label" htmlfor="floatingConfirmPassword" >Confirmar contraseña</label>
              {errors.confirmPassword && (
                  <span className="text-danger">{errors.confirmPassword.message}</span>
                )}

            </div>

          </div>
          <button type="submit" className="col-2 btn btn-primary">Register</button>
        </form>
      </div>
  )
  


}  
