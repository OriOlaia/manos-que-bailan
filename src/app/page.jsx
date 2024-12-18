"use client"

import Image from "next/image"

function Principal() {




  return (
        <div className="container">
            <div className="no-container text-center d-flex justify-content-center align-items-center vh-100">
              <div className="row align-items-center">
                <div className="col">
                  <h2 style={{ border: '5px solid blue', borderRadius:'5px', padding:'50px'}}>Bienvenidos a <br /> <span className="fw-bold text-primary" style={{ fontSize:'40px'}}>Manos que Bailan</span></h2>
                  <h3 style={{marginTop:'30px'}}>Un espacio creado para aprender lengua de señas Argentina</h3>
                  <button className="btn btn-primary" style={{height:'50px', width:'200px', marginTop:'20px'}}><a href="/dashboard" className="text-white">Empezar curso</a></button>
                </div>
                <div className="col">
                    <Image
                        src="/assets/lenguadesenaimg.jpg"
                        alt="Seña"
                        width={600}
                        height={375}
                        style={{ borderRadius: '50px' }}
                    />
                </div>
              </div>
            </div>
            <div className="no-container ">
              <div className="row">
                <div className="col">
                  <h2>¿Que es lengua de señas?</h2>
                  <p>
                  La lengua de señas es un sistema de comunicación visual y gestual utilizado principalmente por personas sordas o con discapacidad auditiva para expresar ideas, emociones y conceptos. Se basa en el uso de movimientos de las manos, expresiones faciales y posturas corporales para transmitir mensajes de manera efectiva.
                  </p>
                </div>
              </div>
            </div>
            <div className="no-container vh-100">
                  <div className="row">
                    <div className="col">
                      <Image
                          src="/assets/personassordas.jpg"
                          alt="Seña"
                          width={500}
                          height={300}
                          style={{ borderRadius: '50px' }}
                      />
                    </div>
                    <div className="col">
                        <h3>Características principales:</h3>
                        <ul>
                          <li>Visual y Espacial: Utiliza el espacio alrededor de la persona para representar conceptos.</li>
                          <li>Gestos y Movimientos: Las manos forman signos específicos que representan palabras, frases o ideas.</li>
                          <li>Expresión Facial: Es crucial para expresar emociones, preguntas y énfasis.</li>
                          <li>Estructura Gramatical Propia: Cada lengua de señas tiene su gramática y sintaxis, distintas del idioma hablado en su región.</li>
                        </ul>
                    </div>
                  </div>
              </div>      
              <div className="no-container vh-100">
                    <h3>Lengua de Señas Argentina (LSA):</h3>
                    <p>En Argentina, la lengua de señas se llama LSA (Lengua de Señas Argentina). Es reconocida oficialmente y tiene una rica cultura asociada con la comunidad sorda del país. Su uso permite una comunicación inclusiva y respeta los derechos lingüísticos de las personas sordas.</p>
                  </div>
            </div>
  );
}

export default Principal;
