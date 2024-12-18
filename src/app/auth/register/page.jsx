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

    <div className="container d-flex justify-content-center align-items-center" style={{marginTop:'50px', marginBottom:'200px' }}>
      <div className="text-center" style={{ width: '400px' }}>
        <h1>REGISTRO</h1>
        <form onSubmit={onSubmit} className="row">
          <div className="row">
            <div className="col-12 form-floating mb-3">
              <input 
                type="text" 
                className="form-control" 
                id="floatingInput" 
                placeholder="Ori"
                {...register("username", {
                  required: {
                    value: true,
                    message: "Usuario requerido",
                  }
                })}
              />
              <label className="form-label" htmlFor="floatingInput">Usuario</label>
              {errors.username && (
                <span className="text-danger">{errors.username.message}</span>
              )}
            </div>
          </div>
  
          <div className="row">
            <div className="col-12 form-floating mb-3">
              <input 
                type="email" 
                className="form-control" 
                id="floatingEmail" 
                placeholder="prueba@prueba.com"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Correo requerido",
                  }
                })}
              />
              <label className="form-label" htmlFor="floatingEmail">Email</label>
              {errors.email && (
                <span className="text-danger">{errors.email.message}</span>
              )}
            </div>
          </div>
  
          <div className="row">
            <div className="col-12 form-floating mb-3">
              <input 
                type="password" 
                className="form-control" 
                id="floatingPassword" 
                placeholder="123456"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Contraseña requerida",
                  }
                })}
              />
              <label className="form-label" htmlFor="floatingPassword">Contraseña</label>
              {errors.password && (
                <span className="text-danger">{errors.password.message}</span>
              )}
            </div>
          </div>
  
          <div className="row">
            <div className="col-12 form-floating mb-3">
              <input 
                type="password" 
                className="form-control" 
                id="floatingConfirmPassword" 
                placeholder="123456"
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Confirmación de contraseña requerida",
                  }
                })}
              />
              <label className="form-label" htmlFor="floatingConfirmPassword">Confirmar contraseña</label>
              {errors.confirmPassword && (
                <span className="text-danger">{errors.confirmPassword.message}</span>
              )}
            </div>
          </div>
  
          <button type="submit" className="col-12 btn btn-primary">Registrar</button>
        </form>
      </div>
    </div>
  )
  


}  
