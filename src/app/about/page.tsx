import Image from "next/image";
const About = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center" style={{marginTop:'50px', marginBottom:'50px'}}>
        <div className="col col-4">
         <Image
            src="/assets/MANOS_2.png"
            alt="Seña"
            width={350}
            height={350}
            style={{ borderRadius: '50px' }}
          />
        </div>
        <div className="col col-8">
          <h1>Acerca de Manos que bailan</h1>
          <p>
            Bienvenido/a al curso de Lengua de Señas Argentina (LSA), un espacio
            diseñado para acercarte al fascinante mundo de la comunicación visual.
          </p>

          <p>
            Este proyecto busca romper barreras y fomentar la inclusión, enseñando
            la LSA de manera interactiva y accesible para todos. Inspirado en
            plataformas como Duolingo, aquí podrás aprender a tu ritmo, registrar tu
            progreso y explorar recursos útiles para sumergirte en esta forma de
            comunicación única. Creemos en la importancia de una sociedad más
            inclusiva, donde todos puedan comunicarse sin importar las diferencias.
          </p>

          <p>
            Este curso no solo te enseñará vocabulario y gramática en señas, sino
            que también te acercará a la cultura sorda y su rica historia.
          </p>
        </div>
      </div>
      <div className="row" style={{marginTop:'150px', marginBottom:'150px'}}>
        <div className="col">
          <h2>Acerca de la creadora</h2>
          <p>
            Soy Oriana, desarrolladora y apasionada por la inclusión y la
            tecnología educativa. La idea de crear esta plataforma nació de mi
            interés por contribuir a una sociedad más accesible, brindando
            herramientas que permitan a más personas aprender y usar la Lengua de
            Señas Argentina.
            </p>

            <p>
            Mi experiencia en desarrollo web, especialmente con
            tecnologías como Next.js, me permitió dar vida a este proyecto, con un
            enfoque en la personalización y el aprendizaje progresivo. Además de
            diseñar la plataforma, he puesto especial atención en que el contenido
            sea amigable, intuitivo y útil para todo tipo de usuarios, desde
            principiantes hasta quienes buscan profundizar sus conocimientos.
            </p>
            <p>
              Espero
              que disfrutes esta experiencia y que juntos podamos aprender y crecer en
              el camino hacia una comunicación más inclusiva. ¡Gracias por formar
              parte de este viaje!
            </p>
        </div>
        <div className="col">
        <Image
            src="/assets/fotocreadora.jpg"
            alt="Seña"
            width={400}
            height={400}
            style={{ borderRadius: '50px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
