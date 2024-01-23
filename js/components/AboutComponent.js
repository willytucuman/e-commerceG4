const footer = document.getElementsByTagName("footer")[0];
const body = document.getElementsByTagName("body")[0];
const head = document.getElementsByTagName("head")[0];
const headStyleCss = `<link rel="stylesheet" href="./css/footer.css">`;
const headBootstrap = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">`;
const bodyBootstrap = `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>`;
const headGoogleFonts = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bungee&family=Bungee+Spice&family=Genos:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Play:wght@400;700&family=Press+Start+2P&family=Quantico:ital,wght@0,400;0,700;1,400;1,700&family=Silkscreen:wght@400;700&family=Tektur:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">`;
const footerContent = `<div class="footer__homeLink position-absolute end-0 pe-1">
<a href="#pageBeginning">
  <button class="footer__btn">
    <svg xmlns="http://www.w3.org/2000/svg" class="footer__arrow bi bi-arrow-up-circle" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
    </svg>
    <p class="footer__textBtn text-wrap">Volver arriba</p>
  </button>
</a>
</div>
<section class="footer__section row text-center justify-content-center">
<nav class="col-12 col-md-4 row px-0 mx-0">
  <p class="footer__tittle col-12 h5 mb-3 mt-4">Links</p>
  <div class="col-6 col-md-12 mb-3 px-0">
    <a
      class="footer__link text-decoration-none"
      href="./pages/404.html">
      Términos & condiciones
    </a>
  </div>
  <div class="col-6 col-md-12 mb-3 px-0">
    <a
      class="footer__link text-decoration-none"
      href="./pages/404.html">
      Políticas de privacidad
    </a>
  </div>
  <div class="col-6 col-md-12 mb-3 px-0">
    <a
      class="footer__link text-decoration-none"
      href="./pages/about.html">
      Acerca de Nosotros
    </a>
  </div>
  <div class="col-6 col-md-12 mb-3 px-0">
    <a
      class="footer__link text-decoration-none"
      href="./pages/contact.html">
      Contáctanos
    </a>
  </div>
  <div class="col-6 col-md-12 mb-3 px-0">
    <a
      class="footer__link text-decoration-none"
      href="./pages/404.html">
      Tutoriales
    </a>
  </div>
  <div class="col-6 col-md-12 mb-3 px-0">
    <a
      class="footer__link text-decoration-none"
      href="./pages/404.html">
      Ayuda
    </a>
  </div>
</nav>
<figure class="col-12 col-md-4 my-0 align-self-center">
  <img
    src="./assets/logo/logo_Minimizado_square400px.png"
    alt="Logo de la marca"
    width="250"
    height="250"
    class="footer__logoImage img-fluid" />
  <!-- <figcaption class="footer__logoName h3 mb-0">Hard-Tech</figcaption> -->
  <figcaption class="footer__imgCaption mb-lg-0 fst-italic">
    Todo lo que buscas en
  </figcaption>
  <figcaption class="footer__imgCaption fst-italic">hardware...</figcaption>
</figure>
  <nav class="d-flex col-md-4 justify-content-center align-self-center">
    <div class="footer__card">
      <a class="footer__socialContainer footer__socialContainer_containerOne" href="https://www.instagram.com/" target="_blank">
        <svg viewBox="0 0 16 16" class="footer__socialSvg instagramSvg">
          <path
            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
          ></path>
        </svg>
      </a>
      <a class="footer__socialContainer footer__socialContainer_containerTwo" href="https://twitter.com/" target="_blank">
        <svg viewBox="0 0 16 16" class="footer__socialSvg twitterSvg">
          <path
            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
          ></path>
        </svg>
      </a>
      <a class="footer__socialContainer footer__socialContainer_containerThree" href="https://www.facebook.com/" target="_blank">
        <svg viewBox="100 60 398 492" class="footer__socialSvg facebookSvg">
          <path
            d="M432.552,88.276v88.276h-79.448c-9.71,0-17.655,7.945-17.655,17.655v52.966h88.276v88.276h-88.276 V512h-88.276V335.448h-70.621v-88.276h70.621v-52.966c0-55.614,42.372-101.517,97.103-105.931H432.552z"
          ></path>
        </svg>
      </a>
      <a class="footer__socialContainer footer__socialContainer_containerFour" href="https://wa.me/543814762250?text=HardTech" target="_blank">
        <svg viewBox="0 0 16 16" class="footer__socialSvg whatsappSvg">
          <path
            d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
          ></path>
        </svg>
      </a>
    </div>
  </nav>
<div class="col-12">
  <p class="footer__text mb-1">© 2024 Hard-Tech. Todos los derechos reservados.</p>
</div>
</section>`;

const Footer = () => {
    footer.innerHTML = footerContent;
    footer.classList.value = "container-fluid";
    body.setAttribute("id", "pageBeginning");
    body.insertAdjacentHTML("beforeend", bodyBootstrap);
    head.insertAdjacentHTML("beforeend", headGoogleFonts+headStyleCss+headBootstrap);
};
export default Footer;
/* 


<main class="container-fluid pt-2">
      <section
        id="nosotros"
        class="container-md align-items-center justify-content-center"
      >
        <article class="row mb-4">
          <div class="col-12">
            <h1 class="text-center title">Devs-Sharks-Rolling</h1>
            <p class="text-center paragraph fst-italic nosotros__text--bg p-4">
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
          <ul
            class="row list-unstyled gy-4 justify-content-xxl-center align-items-stretch"
          >
            <li
              class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 d-flex justify-content-center align-items-stretch nosotros__card__item"
            >
              <div
                class="card p-2 text-center scrollFadeAnimation"
                style="width: 18rem"
              >
                <div class="nosotros__card__image__container card-img-top">
                  <img
                    src="../../assets/img/nosotros-jere.png"
                    class="nosotros__card__image"
                    alt="foto miembro del equipo jeremias"
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Jeremias Juarez M.</h5>
                  <a
                    href="https://github.com/JeremiasJM"
                    target="_blank"
                    class="btn nosotros__card__btn__social"
                    ><i class="bi bi-github"></i
                  ></a>
                  <a
                    href="https://www.instagram.com/jeremiasjm98/"
                    target="_blank"
                    class="btn nosotros__card__btn__social"
                    ><i class="bi bi-instagram"></i
                  ></a>
                  <a
                    href="https://twitter.com/JuarezMarrades"
                    target="_blank"
                    class="btn nosotros__card__btn__social"
                    ><i class="bi bi-twitter-x"></i
                  ></a>
                  <a
                    href="mailto:jeremiasjuarezmarrades15@gmail.com"
                    class="btn nosotros__card__btn__social"
                    ><i class="bi bi-envelope-at-fill"></i
                  ></a>
                </div>
              </div>
            </li>
            <li
              class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 d-flex justify-content-center align-items-stretch nosotros__card__item"
            >
              <div
                class="card p-2 text-center scrollFadeAnimation"
                style="width: 18rem"
              >
                <div class="nosotros__card__image__container card-img-top">
                  <img
                    src="../../assets/img/nosotros-eze.png"
                    class="nosotros__card__image"
                    alt="foto miembro del equipo ezequiel"
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Ezequiel Massa</h5>
                  <a
                    href="https://github.com/EzequielMassa"
                    target="_blank"
                    class="btn nosotros__card__btn__social"
                    ><i class="bi bi-github"></i
                  ></a>
                  <a
                    href="https://www.linkedin.com/in/ezequiel-massa-dev/"
                    target="_blank"
                    class="btn nosotros__card__btn__social"
                    ><i class="bi bi-linkedin"></i
                  ></a>
                  <a
                    href="https://portfolio-emdev.firebaseapp.com/emdev"
                    target="_blank"
                    class="btn nosotros__card__btn__social"
                    ><i class="bi bi-globe"></i
                  ></a>
                  <a
                    href="mailto:ezequielmassa.dev@gmail.com"
                    class="btn nosotros__card__btn__social"
                    ><i class="bi bi-envelope-at-fill"></i
                  ></a>
                </div>
              </div>
            </li>
            <li
              class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 d-flex justify-content-center align-items-stretch nosotros__card__item"
            >
              <div
                class="card p-2 text-center scrollFadeAnimation"
                style="width: 18rem"
              >
                <div class="nosotros__card__image__container card-img-top">
                  <img
                    src="../../assets/img/nosotros-cami.png"
                    class="nosotros__card__image"
                    alt="foto miembro del equipo camila"
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Camila Herrera</h5>
                  <a
                    href="https://github.com/camilaherrera93"
                    target="_blank"
                    class="btn nosotros__card__btn__social"
                    ><i class="bi bi-github"></i
                  ></a>
                  <a
                    href="https://www.instagram.com/camilaherrera_ok/"
                    target="_blank"
                    class="btn nosotros__card__btn__social"
                    ><i class="bi bi-instagram"></i
                  ></a>
                  <a
                    href="mailto:kamurs93@gmail.com"
                    class="btn nosotros__card__btn__social"
                    ><i class="bi bi-envelope-at-fill"></i
                  ></a>
                </div>
              </div>
            </li>
            <li
              class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 offset-md-2 offset-lg-0 d-flex justify-content-center align-items-stretch nosotros__card__item"
            >
              <div
                class="card p-2 text-center scrollFadeAnimation"
                style="width: 18rem"
              >
                <div class="nosotros__card__image__container card-img-top">
                  <img
                    src="../../assets/img/nosotros-cris.png"
                    class="nosotros__card__image"
                    alt="foto miembro del equipo cristian"
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Cristian Fernandez</h5>
                  <a
                    href="https://github.com/Fernandez-Cristian-Javier-ISI-UTN-FRT"
                    target="_blank"
                    class="btn nosotros__card__btn__social"
                    ><i class="bi bi-github"></i
                  ></a>
                  <a
                    href="https://www.instagram.com/cristian_fernandez893/"
                    target="_blank"
                    class="btn nosotros__card__btn__social"
                    ><i class="bi bi-instagram"></i
                  ></a>
                  <a
                    href="https://www.facebook.com/cristianjavier.fernandez.58?mibextid=ZbWKwL"
                    target="_blank"
                    class="btn nosotros__card__btn__social"
                    ><i class="bi bi-facebook"></i
                  ></a>
                  <a
                    href="mailto:fernandezcristiana.utn@gmail.com"
                    class="btn nosotros__card__btn__social"
                    ><i class="bi bi-envelope-at-fill"></i
                  ></a>
                </div>
              </div>
            </li>
            <li
              class="col-12 col-md-4 col-lg-3 col-xxl-2 d-flex mx-lg-auto mx-xxl-0 justify-content-center align-items-stretch nosotros__card__item"
            >
              <div
                class="card p-2 text-center scrollFadeAnimation"
                style="width: 18rem"
              >
                <div class="nosotros__card__image__container card-img-top">
                  <img
                    src="../../assets/img/nosotros-mati.png"
                    class="nosotros__card__image"
                    alt="foto miembro del equipo matias"
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Matias Paz</h5>
                  <a
                    href="https://github.com/MPaz-17P"
                    target="_blank"
                    class="btn nosotros__card__btn__social"
                    ><i class="bi bi-github"></i
                  ></a>
                  <a
                    href="https://www.instagram.com/mattt.pz/"
                    target="_blank"
                    class="btn nosotros__card__btn__social"
                    ><i class="bi bi-instagram"></i
                  ></a>
                  <a
                    href="mailto:matias.job19@gmail.com"
                    class="btn nosotros__card__btn__social"
                    ><i class="bi bi-envelope-at-fill"></i
                  ></a>
                </div>
              </div>
            </li>
          </ul>
        </article>
      </section>
    </main>
 */