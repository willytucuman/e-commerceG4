const main = document.getElementsByTagName("main")[0];
const head = document.getElementsByTagName("head")[0];
const title = document.getElementsByTagName("title")[0];
const headStyleCss = `<link rel="stylesheet" href="../css/about.css">`;
const headBootstrap = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">`;
const bodyBootstrap = `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>`;
const headGoogleFonts = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bungee&family=Bungee+Spice&family=Genos:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Play:wght@400;700&family=Press+Start+2P&family=Quantico:ital,wght@0,400;0,700;1,400;1,700&family=Silkscreen:wght@400;700&family=Tektur:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">`;
const aboutContent= `<section
id="about"
class="container-md align-items-center justify-content-center"
>
<article class="row mb-2 me-2 p-2">
  <div class="col-12">
    <h1 class="text-center title">Devs-Sharks-Rolling</h1>
    <p class="text-center paragraph fst-italic about__text--bg p-4">
      En el corazón de la revolución digital, se encuentra un equipo de
      desarrolladores web llamados <strong>Devs-Sharks</strong> dedicados
      y apasionados. Por primera vez, están implementando HTML, CSS y
      JavaScript, los pilares fundamentales de la web, para crear una
      plataforma de comercio electrónico de insumos tecnológicos.
      <br />Este equipo no es solo un grupo de codificadores; son
      artistas digitales, cada uno aportando su propia dosis de
      creatividad y originalidad al proyecto. Cada línea de código que
      escriben es como un trazo de pincel en un lienzo, contribuyendo a
      una obra maestra en constante evolución. Pero más allá de su
      creatividad, este equipo también entiende la importancia de la
      responsabilidad. Saben que están construyendo algo más que una
      simple página web; están creando una experiencia para sus
      usuarios. Cada decisión que toman, cada característica que
      implementan, está guiada por un compromiso con la calidad, la
      seguridad y la satisfacción del usuario.<br /> Así que, cuando visites
      su sitio web, no solo verás una tienda en línea de insumos
      tecnológicos. Verás el resultado de innumerables horas de
      trabajo duro, creatividad y dedicación. Verás la pasión de un
      equipo de desarrolladores web que están haciendo más que
      simplemente escribir código; están dando vida a su visión.
    </p>
  </div>
</article>
<article>
  <ul class="row list-unstyled gy-4 justify-content-xxl-between align-items-stretch">
    <li
      class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 d-flex justify-content-center align-items-stretch about__card__item"
    >
      <div
        class="card p-2 text-center scrollFadeAnimation"
        style="width: 18rem"
      >
        <div class="about__card__image__container card-img-top">
          <img
            src="../assets/img/about-Jere.png"
            class="about__card__image img-fluid rounded-circle"
            alt="foto miembro del equipo jeremias"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">Jeremias Juarez M.</h5>
          <h6>Senior Dev</h6>
          
          <div class="menu">
            <div class="toggle">
              <ion-icon name="Add"></ion-icon>
              </div>
                <ul>
                  <li style="--i:0;--clr:#1877f2">
                    <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                  </li>
                  <li style="--i:1;--clr:#25d366">
                    <a href="#"><ion-icon name="logo-whatsapp"></ion-icon></a>
                  </li>
                  <li style="--i:2;--clr:#1da1f2">
                    <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                  </li>
                  <li style="--i:3;--clr:#FF5733">
                    <a href="#"><ion-icon name="logo-discord"></ion-icon></a>
                 </li>
                 <li style="--i:4;--clr:#0a66c2">
                    <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
                 </li>
                 <li style="--i:5;--clr:#c32aa3">
                    <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                 </li>
                 <li style="--i:6;--clr:#1b1e21">
                     <a href="#"><ion-icon name="logo-github"></ion-icon></a>
                 </li>
                 <li style="--i:7;--clr:#ff0000">
                    <a href="#"><ion-icon name="logo-youtube"></ion-icon></a>
                 </li>
                </ul>
            </div>                          
          </div>
        </div>
   </li>      
   <li
      class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 d-flex justify-content-center align-items-stretch about__card__item"
    >
      <div
        class="card p-2 text-center scrollFadeAnimation"
        style="width: 18rem"
      >
        <div class="about__card__image__container card-img-top">
          <img
            src="../assets/img/about-Jere.png"
            class="about__card__image img-fluid rounded-circle"
            alt="foto miembro del equipo jeremias"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">Jeremias Juarez M.</h5>
          <h6>Senior Dev</h6>                                                                     
          </div>
        </div>                 
    </li>
    <li
      class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 d-flex justify-content-center align-items-stretch about__card__item"
    >
      <div
        class="card p-2 text-center scrollFadeAnimation"
        style="width: 18rem"
      >
        <div class="about__card__image__container card-img-top">
          <img
            src="../assets/img/about-Jere.png"
            class="about__card__image img-fluid rounded-circle"
            alt="foto miembro del equipo jeremias"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">Jeremias Juarez M.</h5>
          <h6>Senior Dev</h6>                                                                     
          </div>
        </div>                 
    </li>
    <li
      class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 d-flex justify-content-center align-items-stretch about__card__item"
    >
      <div
        class="card p-2 text-center scrollFadeAnimation"
        style="width: 18rem"
      >
        <div class="about__card__image__container card-img-top">
          <img
            src="../assets/img/about-Jere.png"
            class="about__card__image img-fluid rounded-circle"
            alt="foto miembro del equipo jeremias"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">Jeremias Juarez M.</h5>
          <h6>Senior Dev</h6>                                                                     
          </div>
        </div>                 
    </li>
    <li
      class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 d-flex justify-content-center align-items-stretch about__card__item"
    >
      <div
        class="card p-2 text-center scrollFadeAnimation"
        style="width: 18rem">
        <div class="about__card__image__container card-img-top">
          <img
            src="../assets/img/about-Jere.png"
            class="about__card__image img-fluid rounded-circle"
            alt="foto miembro del equipo jeremias"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">Jeremias Juarez M.</h5>
          <h6>Senior Dev</h6>
          <a href="https://github.com/JeremiasJM" target="_blank" class="m-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
          </a>
          <a href="https://github.com/JeremiasJM" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="m-2" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>
          </a>
          <a href="https://github.com/JeremiasJM" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="m-2" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
              <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
              <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
            </svg>
          </a>
          <a href="https://github.com/JeremiasJM" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="m-2" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>                        </a>
          
        
        </div>
      </div>                 
    </li>
             
      
  </ul>
</article>
</section>`;


const About =() =>{
    main.innerHTML=aboutContent;
    main.classList.value = "conteiner-fluid pt-2";
    body.setAttribute("id", "pageBeginning");
    body.insertAdjacentHTML("beforeend", bodyBootstrap);
    head.insertAdjacentHTML("beforeend", headGoogleFonts+headStyleCss+headBootstrap);
};
export default About;