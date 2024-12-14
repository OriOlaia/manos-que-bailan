export default function Principal() {
  return  <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <h2>Bienvenidos a Manos que Bailan</h2>
                  <h3>Un espacio creado para aprender lengua de señas Argentina</h3>
                  <button>Empezar curso</button>
                </div>
                <div className="col">
                  <h1>IMAGEN</h1>
                </div>
              </div>
            <div className="row">
              <div className="col">
                <h2>¿Que es lengua de señas?</h2>
                <p>
                  La lengua de señas es una forma de comunicación visual y espacial. 
                  A través de gestos, movimientos de las manos y expresiones faciales, se transmite información de manera efectiva.
                </p>
                    {/*
                      VIDEOS E IMAGENES
                  */}
                <p>
                  Aquí encontrarás recursos, tutoriales y videos para aprender y 
                  practicar la lengua de señas.
                </p>
                <h3>Lista</h3>
                <ul>
                  <li>Guia</li>
                  <li>Documentacion</li>
                  <li>Videos</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Beneficios destacados
                  Incluye 3 o 4 puntos clave:
                  - Método interactivo y fácil de seguir.
                  - Acceso a materiales descargables.
                  - Prácticas con ejemplos reales.
                  - Conexión con la comunidad sorda.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Video introductorio
                  Un breve video explicando qué es la lengua de señas, su importancia y cómo el curso ayuda.
                </p>
              </div>
              <div className="col">
                <p>
                    Sección interactiva: Empieza aprendiendo una seña
                    Muestra una seña básica con su explicación. Por ejemplo:
                    Texto: ¿Sabías que esta es la seña para Hola? Aprende más inscribiéndote.
                    Visual: Imagen o animación de la seña.
                </p>
              </div>
            </div>
          </div>
}
