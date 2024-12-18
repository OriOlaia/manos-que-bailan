
export default function Contact() {
  
  return (
    <div className='container d-flex justify-content-center align-items-center' style={{marginTop:'50px', marginBottom:'200px' }}>
    <div className="text-center" style={{ width: '500px' }}>
      <h2>Contacto</h2>
      <form className='text-center'>
        <label className="form-label" htmlFor="name">Nombre:</label>
        <input
            type="text"
            id="name"
            className="form-control"
        />
  
        <label className="form-label" htmlFor="email">Email:</label>
        <input
            type="email"
            id="email"
            className="form-control"
        />
  
        <label className="form-label" htmlFor="message">Mensaje:</label>
        <textarea
            id="message"
            className="form-control"
        />
  
        <button className="btn btn-primary" type="submit">Enviar</button>
      </form>
    </div>
  </div>
  
  )
}
  