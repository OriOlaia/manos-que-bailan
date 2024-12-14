
export default function Contact() {
  
  return (
      <div className='contact mb-3'>
      <h2>Contacto</h2>
              <form>
                  
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
  )
}
  